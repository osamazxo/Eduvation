import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { ThemeContextProvider } from "./Context/theme-context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { socket } from "api/socket/socket.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));

// initialize react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// initialize socket connection
socket.emit("updateSocketId", {
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
});

// render the app
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </QueryClientProvider>
);
