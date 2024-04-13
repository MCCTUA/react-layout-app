const CartItems = (props) => {
  return (
    <div className="card">
      <p> Name : {props.name}</p>
      <p> Price : {props.price}</p>
      <p> Qty : {props.qty}</p>
    </div>
  );
};

export default CartItems;
