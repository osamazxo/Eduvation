import React, { useState } from "react";
import { Form } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import toast from "react-hot-toast";
import { BaseApi } from "util/BaseApi";
export default function ConfirmCode({ setCurrentStep }) {
  let [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    code: yup.number().required("Verification code is required").min(5),
  });
  const HandelRegistar = async (values) => {
    setLoading(true);
    let { data } = await axios
      .patch(`${BaseApi}/auth/verifyCode`, values)
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
      localStorage.setItem("TokenCode", data.token);

      setLoading(false);
      toast.success("Well Done!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      setCurrentStep(2);
    }
  };
  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <Stack alignItems="center" height={"100%"} gap={3}>
      <Typography
        variant="h1"
        fontSize={"3em"}
        mt={8}
        mb={3}
        color="primary.main"
        fontWeight={600}
      >
        Eduvation
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ width: { xs: "90%", sm: "400px" } }}
      >
        We have sent you a code to your email. please type the code here to
        reset your password.
      </Typography>
      <Stack
        onSubmit={formik.handleSubmit}
        component={Form}
        noValidate
        autoComplete="off"
        alignItems="center"
        gap={5}
        sx={{ width: { xs: "90%", sm: "400px" } }}
      >
        <TextField
          required
          label="verification code"
          defaultValue="Code..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          error={formik.errors.code && formik.touched.code !== undefined}
          helperText={
            formik.errors.code && formik.touched.code ? formik.errors.code : ""
          }
          name="code"
          sx={{ width: "100%" }}
        />
        <LoadingButton
          loading={loading ? loading : ""}
          variant="contained"
          type="submit"
          sx={{
            width: "250px",
            height: "48x",
            borderRadius: "25px",
            fontSize: "20px",
            color: "white",
          }}
          endIcon={<SendIcon />}
        >
          Send
        </LoadingButton>
      </Stack>
    </Stack>
  );
}
