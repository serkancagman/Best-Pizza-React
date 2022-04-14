import React from "react";
import { getMe, userLogout } from "API/API";
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const userData = (data) => {
    setUser(data.user);
    setIsAuthenticated(true);
    setIsAdmin(data.user.role === "admin" ? true : false);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  React.useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        setUser(me);
      } catch (err) {}
    })();
  }, []);

  const handleLogout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");

    try {
      await userLogout();
    } catch (err) {}
    

    window.location.reload();
  };

  const values = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    isAdmin,
    userData,
    handleLogout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
