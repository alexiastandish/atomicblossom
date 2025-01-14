"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "@/components/Heading";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "@/components/inputs/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { SafeUser } from "@/types/SafeUser";

interface LoginForm {
  currentUser: SafeUser | null;
}

export default function LoginForm({
  currentUser,
}: {
  currentUser: SafeUser | null;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/");
        router.refresh();
        toast.success("Logged In");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logged in... redirecting...</p>;
  }

  return (
    <>
      <Heading title="Sign in" />
      <Button
        outline
        label="Sign In with Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Sign In"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        No Account?
        <Link className="underline" href="/register">
          Sign Up
        </Link>
      </p>
    </>
  );
}
