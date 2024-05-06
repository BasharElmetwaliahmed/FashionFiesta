import CartItem from "./CartItem";

function CartListItem({cart}) {
  return (
    <div>
      {cart.map((cartItem) => (
        <CartItem  key={cartItem.id} item={cartItem} />
      ))}
    </div>
  );
}

export default CartListItem