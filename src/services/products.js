import { fetchData } from "./custom";

export const getAllProducts = async (category = null) => {
  try {
    const { data } = await fetchData.get("/products?offset=0&limit=20");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getProductsByCategory = async (id) => {
  try {
    const { data } = await fetchData.get(
      `/categories/${id}/products?offset=0&limit=10`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const getProductsById = async (id) => {
  try {
    const { data } = await fetchData.get(`/products/${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};
