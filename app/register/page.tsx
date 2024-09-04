import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import React from "react";
import RegisterForm from "./RegisterForm";
import getCurrentUser from "@/actions/getCurrentUser";

export default async function Register(props) {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
}
