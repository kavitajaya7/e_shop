import { createContext, useState } from "react";

const addCartItems = (productstoAdd, cartItems) => {
  //find wheather addItemstoCart is present in cartItems or not

  const contentitem = cartItems.find((cartItem) => {
    return cartItem?.id === productstoAdd?.id;
  });

  // if yes then increase quantity by one
  if (contentitem) {
    return cartItems.map((cartItem) =>
      cartItem?.id === productstoAdd?.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if no the return the modified array
  return [...cartItems, { ...productstoAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemstoCart: (product) => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const addItemstoCart = (productstoAdd) => {
    setcartItems(addCartItems(productstoAdd, cartItems));
    console.log(cartItems);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemstoCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
