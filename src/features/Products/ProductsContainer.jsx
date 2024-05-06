import Empty from "../../ui/Empty";
import ProductCard from "./ProductCard";

function ProductsContainer({ products }) {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <Empty resource={"products"} />
      )}
    </>
  );
}

export default ProductsContainer;
