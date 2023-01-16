import { useContext } from "react";

import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

import CartItems from "../cart-items/cart-items.component";
import {CartContext} from "../../contexts/cart.context"

const CartDropDown = () => {

const {cartItems} = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map((items)=>(
          <CartItems  cartItem ={items}/>
        ))}
         </div>
      <Button> Go To CheckOut</Button>
    </div>
  );
};

export default CartDropDown;
