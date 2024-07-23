import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Box, Link, Typography } from "@mui/material";

import { BaseApi } from "../../../../../util/BaseApi.js";
import toast from "react-hot-toast";
import SigninData from "./Input.tsx";
import { LoadingButton } from "@mui/lab";
import { useQueryClient } from "@tanstack/react-query";

export default function SigninForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  const quetClient = useQueryClient();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Please length greater than 8"),
  });

  const handleSignin = async (values) => {
    setLoading(true);
    let { data } = await axios
      .post(`${BaseApi}/auth/Login`, values)
      .catch((err) => {
        toast.error(err.response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#1B0A26",
            color: "#F2C791",
          },
        });
        setLoading(false);
      });

    if (data.message === "Done") {
      setLoading(false);
      toast.success("Successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      localStorage.setItem("token", data.BrearerToken);
      quetClient.setQueryData(["isAuth"], () => true);
      axios.defaults.headers.common["token"] = data.BrearerToken;
      nav("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,
    onSubmit: handleSignin,
  });

  return (
    <Form onSubmit={formik.handleSubmit} method="post" autoComplete="off">
      <Box className="flex flex-col items-center gap-4">
        {SigninData.map((data) => (
          <React.Fragment key={data.name}>
            <TextField
              name={data.name}
              label={data.label}
              type={data.name === "password" ? "password" : "text"}
              required
              error={
                formik.errors[data.name] &&
                formik.touched[data.name] !== undefined
              }
              helperText={
                formik.errors[data.name] && formik.touched[data.name]
                  ? formik.errors[data.name]
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[data.name]}
              variant="outlined"
              size="small"
              sx={{ width: { xs: "90%", sm: "400px" } }}
            />
          </React.Fragment>
        ))}

        <Typography
          component={Link}
          to={"/reset-password"}
          variant="body2"
          sx={{ float: "right" }}
        >
          Forget password?
        </Typography>
        <LoadingButton
          type="submit"
          loading={loading}
          variant="contained"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        >
          Sign in
        </LoadingButton>

        <Divider sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>

        <Typography variant="body1" color="text.secondary">
          Still without account?{" "}
          <Link component={RouterLink} to={"/signup"}>
            Create one
          </Link>
        </Typography>
      </Box>
    </Form>
  );
}
