/* eslint-disable jsx-a11y/anchor-is-valid */
const CartItems = (props) => {
  console.log(props);
  return (
    <div classname="card">
      <div className="card">
        <img src={props.imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price} THB</p>
          <p className="card-text">{props.qty} items</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
