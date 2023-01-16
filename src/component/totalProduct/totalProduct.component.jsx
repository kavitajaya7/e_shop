import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../contexts/cart.context";

const Total = () => {
  const { cartItems } = useContext(CartContext);
  const [ total, setTotal ] = useState(0);
  let gyg = 0;

  useEffect(() => {
    const final = cartItems.map((item)=> {
       gyg += item.quantity;
       return gyg;
    })
  
    setTotal(final);
   
  }, [cartItems]);

  return <div>{total}</div>;
};

export default Total;
