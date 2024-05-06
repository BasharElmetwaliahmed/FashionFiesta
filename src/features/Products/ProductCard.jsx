import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { BsCartPlusFill, BsCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getCartQuantityById,
  increaseItemQuantity,
  removeItem,
} from "../cart/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCartQuantityById(product.id));

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
    <div className="p-4 shadow-md rounded-md hover:shadow-lg transition-all duration-300 hover:bg-primary-50">
      <div>
        <img src={image} alt={product.title} />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <Link to={`/products/${product.id}`}>
          <h4 className="font-semibold text-primary-700 h-16">
            {product?.title}
          </h4>
        </Link>
        <p className="text-yellow-500 font-semibold ">{product?.price}$</p>
        <p>{product.category.name}</p>
        <div className="flex flex-row justify-between items-center">
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
  );
}

export default ProductCard;
