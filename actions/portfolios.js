import axios from "axios";
import { useApiHandler } from "./index";
import { fetcher } from "./index";
import useSWR from "swr";

function createPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

export function useCreatePortfolio() {
  return useApiHandler(createPortfolio);
}

export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/portfolios/${id}` : null,
    fetcher
  );
  debugger
  return { data, error, userLoading: !data && !error, ...rest };
};
