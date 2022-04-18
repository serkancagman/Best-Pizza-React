import React from "react";

export const ShopCartContext = React.createContext();

export const ShopCartProvider = ({ children }) => {
  const localCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = React.useState(localCart);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);
  const [cartTotalDiscount, setCartTotalDiscount] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let discount = 0;
    cart.forEach((item) => {
      if (item.salePrice && item.price) {
        let usePrice = item.price - item.salePrice;
        discount += usePrice * item.quantity;
      }
    });
    const calculateTotalPrice = cart
    .reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(2);
    let useTotal = calculateTotalPrice - discount
    setCartTotalDiscount(discount.toFixed(2));
    setCartTotalPrice(calculateTotalPrice);
    setTotalPrice(useTotal.toFixed(2));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const productIndex = cart.findIndex((item) => item._id === product._id);
    if (productIndex === -1) {
      product.quantity = quantity;
      setCart([...cart, product]);
    } else {
      cart[productIndex].quantity += quantity;
      setCart([...cart]);
    }
  };

  const productQuantity = (product, quantity) => {
    const productIndex = cart.findIndex((item) => item._id === product._id);
    cart[productIndex].quantity = quantity;
    setCart([...cart]);
    };

  // Cart Calculates

  

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item._id !== product._id));
  };

  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      productQuantity(product, product.quantity - 1);
    } else {
      return;
    }
  };
  const values = {
    cart,
    addToCart,
    cartTotalPrice,
    totalPrice,
    cartTotalDiscount,
    removeFromCart,
    productQuantity,
    handleDecrease,
    setCart
  };

  return (
    <ShopCartContext.Provider value={values}>
      {children}
    </ShopCartContext.Provider>
  );
};
