import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductsById } from "../services/products";
import Loading from "../ui/Loading";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { BsCartPlusFill, BsCartXFill } from "react-icons/bs";
import {
  addItem,
  decreaseItemQuantity,
  getCartQuantityById,
  increaseItemQuantity,
  removeItem,
} from "../features/cart/cartSlice";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const quantity = useSelector(getCartQuantityById(product.id));
  const setData = async () => {
    setLoading(true);
    try {
      const data = await getProductsById(id);
      setProduct(data);
      console.log(data);
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
    const increaseProduct = () => {
      if (quantity == 0) {
        dispatch(addItem(product));
      } else {
        dispatch(increaseItemQuantity(product.id));
      }
    };
    const decreaseProduct = () => {
      if (quantity > 0) dispatch(decreaseItemQuantity(product.id));
    };

    let image;
  if (product.images)  image = product.images;
  else  image= product.image
  return (
    <div className="container flex min-h-[calc(100vh_-_96px)]  items-center sec-top ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex md:flex-row flex-col w-full gap-10 py-20">
          <div className="w-full md:w-1/3 ">
            <img src={image} alt={product.title} className="rounded-md" />
          </div>
          <div className="flex flex-col justify-start w-full md:w-2/3  h-full flex-1  gap-1 ">
            <h2 className="text-3xl text-primary-500 ">{product.title}</h2>
            {product.category && (
              <p className="text-gray-500">{product?.category?.name}</p>
            )}
            <p className="mt-3  ">{product.description}</p>

            <div className="flex flex-row gap-1 items-center">
              <div className="flex items-center text-primary-700 gap-4 border-primary-700 rounded-md border-[1px] w-fit py-2 px-4 my-2 ">
                <button className="quantity-option" onClick={decreaseProduct}>
                  <FiMinus />
                </button>
                <span>{quantity ? quantity : 0}</span>
                <button className="quantity-option" onClick={increaseProduct}>
                  <GoPlus />
                </button>
              </div>
              {quantity == 0 ? (
                <button
                  className="text-white p-2 bg-primary-700 rounded-md text-xl opactiy-transition"
                  onClick={() => dispatch(addItem(product))}>
                  <BsCartPlusFill />
                </button>
              ) : (
                <button
                  className="text-white p-2 bg-red-700 rounded-md text-xl opactiy-transition"
                  onClick={() => dispatch(removeItem(product.id))}>
                  <BsCartXFill />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
