import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../features/categories/categoriesSlice";
import SelectCategory from "../features/categories/SelectCategory";
import ProductsContainer from "../features/Products/ProductsContainer";
import { getAllProducts, getProductsByCategory } from "../services/products";
import Loading from "../ui/Loading";

function ProductsPage() {
  const { isLoading } = useSelector(getCategories);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setData = async () => {
    setLoading(true);
    try {
      let data;
      if (!currentCategory) data = await getAllProducts();
      else data = await getProductsByCategory(currentCategory);
      setProducts(data);
    } catch (e) {
      console.log(e);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setData();
  }, [currentCategory]);

  return (
    <div className="sec-p min-h-[60vh] flex justify-center items-center ">
      {!isLoading ? (
        <div className="container">
          {" "}
          <div className="py-2">
            <SelectCategory
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>
          {!loadingProducts ? (
            <ProductsContainer products={products} />
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductsPage;
