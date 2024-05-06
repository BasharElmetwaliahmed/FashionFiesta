import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import Loading from "../../ui/Loading";
import ProductsContainer from "../Products/ProductsContainer";

function TopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setData = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (e) {
        console.log(e)
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <div className="container sec-p">
      <h3 className="sec-header">Top Products</h3>
      {loading ? (
        <Loading/>
      ) : (
        <ProductsContainer products={products.slice(0,10)}/>
      )}
    </div>
  );
}

export default TopProducts;
