import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../services/categories";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import CategoriesList from "./CategoriesList";
import { getCategories } from "./categoriesSlice";

function Categories() {
  const {categories , isLoading} = useSelector(getCategories);
  // const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const setData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await getAllCategories();
  //     setCategories(data);
  //   } catch (e) {
  //     toast.error("Error while loading categories");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setData();
  // }, []);
  return (
    <div className="container sec-p">
      <h3 className="sec-header ">Categories</h3>

      {isLoading ? (
        <Loading />
      ) : categories.length > 0 ? (
        <CategoriesList categories={categories} />
      ) : (
        <Empty resource={"categories"} />
      )}
    </div>
  );
}

export default Categories;
