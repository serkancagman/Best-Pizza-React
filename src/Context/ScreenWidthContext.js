
  
import React from "react";
export const ScreenWidthContext = React.createContext();

export const ScreenWidthProvider = ({ children }) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const values = {
    windowDimensions,
  };

  return (
    <ScreenWidthContext.Provider value={values}>
      {children}
    </ScreenWidthContext.Provider>
  );
};