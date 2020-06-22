import { fetcher } from "actions/index";
import useSWR from "swr";

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR("/api/v1/me", fetcher);
  return { user: data, error, userLoading: !data && !error, ...rest };
};
