import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getOrders } from "../features/orders/ordersSlice";
import Empty from "../ui/Empty";
import Loading from "../ui/Loading";
import { formatDateOrders } from "../utils/helpers";

function Orders() {
  const { orders, isLoading } = useSelector(getOrders);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user]);
  return (
    <div className="sec-top min-h-[70vh]">
      <div className="container flex items-center flex-col w-full">
        <h2 className="sec-header mb-14">Orders</h2>

        {!isLoading ? (
          orders.length ? (
            <div className="overflow-x-auto w-full rounded-lg  shadow-lg sm:w-auto">
              <table className="w-full max-w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-primary-700 sm:text-lg text-xs rounded-lg text-white">
                  <tr>
                    <th className="py-2 px-4">Order ID</th>
                    <th className="py-2 px-4">Created At</th>
                    <th className="py-2 px-4">Total Price</th>
                    <th className="py-2 px-4">Total Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-primary-700 text-center text-xs">
                  {orders.map((order) => (
                    <tr key={order.orderId}>
                      <Link to={`/orders/${order.orderId}`}>
                        <td className="py-3 px-4">{order.orderId}</td>
                      </Link>
                      <td className="py-3 px-4">
                        {formatDateOrders(order.createdAt)}
                      </td>
                      <td className="py-3 px-4">{order.totalPrice}$</td>
                      <td className="py-3 px-4">{order.totalQuantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty resource={"orders"} />
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Orders;
