import axios from "axios";
import { useApiHandler, fetcher } from "actions/index";
import useSWR from "swr";

const createBlog = data => axios.post('/api/v1/blogs', data);

function updateBlog(id, data) {
  return axios.patch(`/api/v1/blogs/${id}`, data);
}

// function deletePortfolio(id) {
//   return axios.delete(`/api/v1/portfolios/${id}`);
// }

// export function useDeletePortfolio() {
//   return useApiHandler(deletePortfolio);
// }

export const useCreateBlog = () => useApiHandler(createBlog);

export function useUpdateBlogs() {
  return useApiHandler(updateBlog);
}

export const useGetBlog = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/blogs/${id}` : null,
    fetcher
  );
  return { data, error, userLoading: !data && !error, ...rest };
};