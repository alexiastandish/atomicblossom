"use client";

import { CartContextProvider } from "@/hooks/useCart";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type CartProviderProps = {
  currentUser: SafeUser | null;
  children: React.ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({
  currentUser,
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      router.refresh();
    }
  }, []);

  return (
    <CartContextProvider currentUser={currentUser}>
      {children}
    </CartContextProvider>
  );
};

export default CartProvider;
