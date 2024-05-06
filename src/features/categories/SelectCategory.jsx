import { getCategories } from "./categoriesSlice";
import { useSelector } from "react-redux";


function SelectCategory({ currentCategory, setCurrentCategory }) {
  const { categories } = useSelector(getCategories);

  return (
    <form className="max-w-sm mx-auto ">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-primary-700 dark:text-white">
        Catgories
      </label>
      <select
        id="categories"
        defaultValue={null}
        onChange={(e)=>setCurrentCategory(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-primary-700 text-sm rounded-lg focus:text-primary-400 focus:border-primary-500 block w-full p-2.5 dark:bg-primary-700 dark:border-primary-600-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-primary-500">
        <option value={null}>Choose a Category</option>
        {categories.slice(0, 5).map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}{" "}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SelectCategory