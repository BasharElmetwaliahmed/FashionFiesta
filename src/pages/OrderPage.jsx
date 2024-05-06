import { useParams } from "react-router-dom";
import { getOrderById, getOrderLoading } from "../features/orders/ordersSlice";
import {useSelector } from 'react-redux'
import Loading from "../ui/Loading";
import { formatTimestamp } from "../utils/helpers";
import { FaCalendarAlt } from "react-icons/fa";

function OrderPage() {
  const { id } = useParams();
  const order = useSelector(getOrderById(id));
  const isLoading = useSelector(getOrderLoading);
  
  if(isLoading || !order) return <Loading/>
  return (
    <div className="container sec-p px-8">
      <div className="sec-header flex gap-2 md:gap-8 md:items-center  md:flex-row flex-col">
        <h2 className=" text-xl md:text-4xl  flex md:items-center gap-2 md:flex-row flex-col text-start text-primary-500">
          Order{" "}
          <span className="font-bold text-sm text-primary-700 ">
            #{order.orderId}
          </span>
        </h2>
        <p className="text-sm text-primary-500 flex gap-2">
          <FaCalendarAlt />

          {formatTimestamp(order.createdAt)}
        </p>
      </div>
      <div className="flex flex-col border-primary-200 border-[1px] rounded-md my-8  py-4 px-4 w-full ">
        <div className="flex flex-col gap-6 sm:text-start text-center">
          {order.cartItems.map((item) => (
            <div className="flex sm:flex-row flex-col md:items-start items-center gap-4 px-2  border-0 border-b-[1px]  border-primary-200 py-4  ">
              <img
                className="w-full sm:w-[150px] rounded-md"
                src={item.images[0]}
              />
              <div className="flex flex-col gap-4 text-primary-700 ">
                {" "}
                <h4 className="text-primary-600 ">{item.title}</h4>
                <p className="font-bold">{item.price}$</p>
                <p className="flex gap-2 items-center justify-center md:justify-start">
                  Quantity : <span>{item.quantity}X</span>
                </p>
                <p className="flex gap-2 items-center justify-center md:justify-start">
                  Total : <span>{item.totalPrice}$</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="py-5 text-xl text-primary-600 font-semibold">
            Payment Summary
          </h4>
          <div className="flex flex-col gap-3 text-primary-500">
            <p className="flex  gap-4">
              Quantity : <span>{order.totalQuantity}X</span>
            </p>
            <p className="flex  gap-4">
              Total Price : <span>{order.totalPrice}$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
