import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import {useDispatch} from 'react-redux'
import { FaRegTrashAlt } from "react-icons/fa";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch= useDispatch();
  return (
    <div className="flex justify-between border-b-[1px] border-gray-300 py-6 px-2">
      <div className="flex gap-3">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-32 rounded-md"
        />
        <div className="flex flex-col gap-2 ">
          <h3 className="text-sm font-semibold text-primary-700 sm:text-xl">
            {item.title}
          </h3>
          <p className="text-xs sm:text-base  text-gray-400">
            {item.category.name}
          </p>
          <div className="flex items-center text-primary-700 text-sm gap-2 border-primary-700 rounded-md border-[1px] w-fit py-1 px-2 my-1 ">
            <button
              className="quantity-option text-sm"
              onClick={() => dispatch(decreaseItemQuantity(item.id))}>
              <FiMinus />
            </button>
            <span>{item.quantity ? item.quantity : 0}</span>
            <button
              className="quantity-option text-sm"
              onClick={() => dispatch(increaseItemQuantity(item.id))}>
              <GoPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="font-bold text-red-600">{item.totalPrice}</p>
        <p className="text-primary text-primary-500">X{item.quantity}</p>
        <button
          className="text-lg text-gray-500"
          onClick={() => dispatch(removeItem(item.id))}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
