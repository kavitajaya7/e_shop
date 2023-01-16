import "./cart-item.styles.scss";

const CartItems = ({ cartItem }) => {
  const { name, quantity, imageUrl,price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} X ${price}</span>
      </div>
    </div>
  );
};

export default CartItems;
