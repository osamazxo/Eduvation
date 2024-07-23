import { Typography } from "@mui/material";
import React from "react";
import AuthTemplate from "./components/AuthTemplate";
import SignupForm from "./components/SignupForm";
function Signup() {
  return (
    <AuthTemplate>
      <Typography
        variant="h1"
        fontSize={"3em"}
        mt={3}
        color="primary.main"
        fontWeight={600}
      >
        Eduvation
      </Typography>
      <Typography variant="h5" color="secondary.main" mt={2} mb={2}>
        Welcome to our site!
      </Typography>
      <SignupForm />
    </AuthTemplate>
  );
}

export default Signup;
