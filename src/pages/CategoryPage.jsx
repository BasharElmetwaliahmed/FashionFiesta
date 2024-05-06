import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsContainer from "../features/Products/ProductsContainer";
import { getCategory } from "../services/categories";
import { getProductsByCategory } from "../services/products";
import Loading from "../ui/Loading";

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: "" });
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setData = async () => {
    setLoading(true);
    try {
      const [categoryData, productsData] = await Promise.all([
        getCategory(id),
        getProductsByCategory(id),
      ]);
      setCategory(categoryData);
      setProducts(productsData.slice(0, 10));
    } catch (error) {
      console.error(error.message);
      if (error.response.status === 400) navigate("/404");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <div className="container my-10 sec-top min-h-[50vh] flex justify-center items-center flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h2 className="text-center text-3xl text-primary-700 my-2 font-semibold">
            {category.name}
          </h2>
          <ProductsContainer products={products} />
        </>
      )}
    </div>
  );
}

export default CategoryPage;
