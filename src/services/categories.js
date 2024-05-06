import { fetchData } from "./custom";

export const getAllCategories = async () => {
  try {
    const { data } = await fetchData.get("/categories");
    return data;
  } catch (e) {
    throw e;
  }
};



export const getCategory = async (id) => {
  try {
    const { data } = await fetchData.get(`/categories/${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};