import React from "react";

export const ShopCartContext = React.createContext();

export const ShopCartProvider = ({ children }) => {
  const localCart = JSON.parse(localStorage.getItem("cart")) || [];
  const localStep = JSON.parse(localStorage.getItem("step")) || [
    {
      name: "check",
      status: "process",
    },
    {
      name: "address",
      status: "wait",
    },
    {
      name: "pay",
      status: "wait",
    },
    {
      name: "done",
      status: "wait",
    },
  ];

  const [cart, setCart] = React.useState(localCart);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);
  const [cartTotalDiscount, setCartTotalDiscount] = React.useState(0);
  const [shipping, setShipping] = React.useState(7.99);
  const [orderStep, setOrderStep] = React.useState(localStep);
  const processStepIndex = orderStep.findIndex(
    (step) => step.status === "process"
  );
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
    let useTotal = calculateTotalPrice - discount;
    setCartTotalDiscount(discount.toFixed(2));
    setCartTotalPrice(calculateTotalPrice + shipping);
    setTotalPrice(useTotal.toFixed(2));
  }, [cart, shipping]);

  React.useEffect(() => {
    if (totalPrice > 100) {
      setShipping(0);
    } else {
      setShipping(7.99);
    }
  }, [totalPrice]);

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

  const handleStep = (stepValue) => {
    const findStep = orderStep.findIndex((item) => item.name === stepValue);

    if (orderStep.length - 1 === findStep) {
      orderStep[findStep].status = "finish";
    } else {
      orderStep[findStep].status = "finish";
      orderStep[findStep + 1].status = "process";
    }

    setOrderStep([...orderStep]);
  };
  React.useEffect(() => {
    localStorage.setItem("step", JSON.stringify(orderStep));
  }, [orderStep]);
  const values = {
    cart,
    addToCart,
    cartTotalPrice,
    totalPrice,
    cartTotalDiscount,
    removeFromCart,
    productQuantity,
    handleDecrease,
    setCart,
    shipping,
    handleStep,
    orderStep,
    processStepIndex,
  };

  return (
    <ShopCartContext.Provider value={values}>
      {children}
    </ShopCartContext.Provider>
  );
};
