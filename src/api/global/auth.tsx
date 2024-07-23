import { useQuery } from "@tanstack/react-query";

export function useIsAuth() {
  const query = useQuery({
    queryKey: ["isAuth"],
    queryFn: () => {
      return localStorage.getItem("token") !== null;
    },
  });
  return query;
}
