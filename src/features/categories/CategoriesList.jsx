import { Link } from "react-router-dom";

function CategoriesList({ categories }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-6 my-8">
      {categories.slice(0, 5).map((category) => (
        <Link
        key={category.id}
          to={`/categories/${category.id}`}
          className="p-4 shadow-md rounded-lg hover:bg-slate-100 transition-all duration-300 border-[1px] border-transparent hover:border-primary-400 hover:shadow-xl">
          <img src={category.image} className="mb-4 rounded-lg" />
          <h4 className="text-center text-lg font-bold text-primary-700">
            {category.name}
          </h4>
        </Link>
      ))}
    </div>
  );
}

export default CategoriesList;
