import axios from "axios";
import { useApiHandler } from "actions/index.js";
import { fetcher } from "actions/index";
import useSWR from "swr";

function createPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

function updatePortfolio(id, data) {
  return axios.patch(`/api/v1/portfolios/${id}`, data);
}

function deletePortfolio(id) {
  return axios.delete(`/api/v1/portfolios/${id}`);
}

export function useDeletePortfolio() {
  return useApiHandler(deletePortfolio);
}

export function useCreatePortfolio() {
  return useApiHandler(createPortfolio);
}

export function useUpdatePortfolio() {
  return useApiHandler(updatePortfolio);
}

export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/portfolios/${id}` : null,
    fetcher
  );
  return { data, error, userLoading: !data && !error, ...rest };
};
