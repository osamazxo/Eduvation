import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import Link from "@mui/material/Link";
import ActionsRight from "../ActionsRight/ActionsRight.tsx";
import { useIsAuth } from "api/global/auth.tsx";

const CustomLink = ({ to, label }) => {
  return (
    <Typography component={Link} to={to} color="text.primary" fontWeight="500">
      {label}
    </Typography>
  );
};
export default function NavbarFull({
  visibleIcons = {
    wishlist: true,
    notification: true,
    cart: true,
    avatar: true,
    themeMode: true,
  },
}) {
  const { data: isAuth } = useIsAuth();
  console.log("isAuth ", isAuth);
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        p: "1em",
        backgroundColor: (theme) => theme.palette.background.b1,
      }}
    >
      <Box display="flex" gap="16px" alignItems="center">
        <Typography
          variant="h4"
          fontSize={{ xs: "1.4em", sm: "1.8em" }}
          fontWeight="600"
          component="h1"
        >
          <Link
            to={"/"}
            component={RouterLink}
            color="primary.main"
            sx={{
              textDecoration: "none",
            }}
          >
            Eduvation
          </Link>
        </Typography>
        <CustomLink label="Courses" to="/courses" />
        <CustomLink label="Workshops" to="workshops" />
      </Box>
      <SearchBar />
      {!isAuth && (
        <Box display="flex" alignItems="center" gap="16px">
          <CustomLink label="Sign in" to="signin" />
          <CustomLink label="Sign up" to="signup" />
        </Box>
      )}
      {isAuth && <ActionsRight visibleIcons={visibleIcons} />}
    </Box>
  );
}
