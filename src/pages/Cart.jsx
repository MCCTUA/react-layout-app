import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div>
      <CartItems name="Banana" price="30" qty="2" />
      <CartItems name="Bread" price="15" qty="2" />
    </div>
  );
};

export default Cart;
