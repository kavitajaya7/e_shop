import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ products }) => {
  const { name, id, imageUrl, price } = products;
  const { addItemstoCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemstoCart(products);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        
      </div>

      <Button buttonType="inverted" onClick ={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
