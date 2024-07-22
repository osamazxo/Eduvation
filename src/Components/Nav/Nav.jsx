import { useState } from "react";
import { InputBase, Paper, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import WishlistItems from "./Wishlist";
import NotificationButton from "shared/ui/Navbar/ActionsRight/NotificationButton";
import AvatarButton from "shared/ui/Navbar/ActionsRight/AvatarButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const auth = localStorage.getItem("token");
  const nav = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Workshops", href: "/workshops" },

    { name: "Courses", href: "/courses" },
  ];

  const Auth = [
    { name: "Login", href: "/signin" },
    { name: "Register", href: "/signup" },
  ];

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      nav(`/search/${searchQuery}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-6">
        <div className="relative flex h-16 items-center justify-around">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className="flex flex-shrink-0 items-center cursor-pointer"
              onClick={() => nav("/")}
            >
              <Typography variant="h5" fontWeight="600" color={"primary.main"}>
                Eduvation
              </Typography>
            </div>
            <div className="hidden sm:ml-4 sm:block">
              <div className="flex  flex-row justify-between items-center  space-x-8">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      (isActive ? "text-white" : "text-gray-300") +
                      " p-2 rounded-md  font-medium "
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="">
                  <Paper
                    component="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSearchSubmit();
                    }}
                    sx={{
                      alignItems: "center",
                      borderRadius: "15px",
                      mx: 10,
                    }}
                  >
                    <InputBase
                      sx={{ px: "2rem" }}
                      placeholder="Search...."
                      inputProps={{
                        "aria-label": "search google maps",
                        value: searchQuery,
                        onChange: handleInputChange,
                      }}
                    />
                  </Paper>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {auth ? (
              <>
                <div className="hidden sm:ml-4 sm:block ">
                  <div className="flex gap-1 items-center">
                    <CartItems />
                    <WishlistItems />
                    <NotificationButton />
                  </div>
                </div>
                <AvatarButton />
              </>
            ) : (
              <div className="flex  flex-row  space-x-1">
                {Auth.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      "text-slate-50 ",
                      "rounded-md px-1 py-3 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
