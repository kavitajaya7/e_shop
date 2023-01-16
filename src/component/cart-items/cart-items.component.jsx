import "./cart-items.styles.scss"

const CartItems = ({cartItem}) =>{ 
const {name,quantity} = cartItem;
  return(
    <div>
      <h2>{name}</h2>
      <h3>{quantity}</h3>
    </div>
  )
}

export default CartItems;