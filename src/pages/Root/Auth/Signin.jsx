import { Typography } from "@mui/material";
import React from "react";
import AuthTemplate from "./components/AuthTemplate";
import SigninForm from "./components/SigninForm";
function Signin() {
  return (
    <AuthTemplate>
      <Typography
        color="primary.main"
        variant="h1"
        fontSize={"3em"}
        mt={4}
        fontWeight={600}
      >
        Eduvation
      </Typography>
      <Typography variant="h5" color="text.secondary" mt={2} mb={2}>
        Welcome back!
      </Typography>
      <SigninForm />
    </AuthTemplate>
  );
}

export default Signin;
