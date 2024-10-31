import { fetcher } from "@/lib/fetcher";

export const getBooks = async () => {
  const response = await fetcher.get("/book");
  return response.data;
};
