import React from "react";
import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import LoginForm from "./LoginForm";
import getCurrentUser from "@/actions/getCurrentUser";
export const dynamic = "force-dynamic";

export default async function Login() {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
}
