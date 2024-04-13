import CartItems from "./CartItems";
const products = [
  {
    imgUrl: "https://techxcite.com/products/1382/gallery/S21%20Ultra.jpg",
    name: "Samsung Galaxy S21 Ultra (12GB + 256GB)",
    price: 41900,
    qty: 1,
  },
  {
    imgUrl: "https://techxcite.com/products/1362/gallery/Mate30Pro_01.jpg",
    name: "Huawei Mate 30 Pro",
    price: 28900,
    qty: 1,
  },
  {
    imgUrl: "https://techxcite.com/products/1292/gallery/Untitled-2%20fix.jpg",
    name: "Samsung Galaxy A70",
    price: 15990,
    qty: 1,
  },
  {
    imgUrl: "https://techxcite.com/products/1279/gallery/r1.png",
    name: "Xiaomi Redmi note 7",
    price: 4999,
    qty: 1,
  },
  {
    imgUrl: "https://techxcite.com/products/1271/gallery/S10pC_04.jpg",
    name: "Samsung Galaxy S10+ Ceramic [1TB]",
    price: 55900,
    qty: 1,
  },
];

const Cart = () => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              {/* <CartItems
                imgUrl={product.imgUrl}
                name={product.name}
                price={product.price}
                qty={product.qty}
              /> */}
              <CartItems product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
