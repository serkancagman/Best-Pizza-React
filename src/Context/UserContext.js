import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const localRole = localUser ? localUser.role : null;
  const [user, setUser] = React.useState(localUser || null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(
    localRole === "admin" ? true : false
  );

  const userData = (data) => {
    setUser(data.user);
    setIsAuthenticated(true);
    setIsAdmin(data.user.role === "admin" ? true : false);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const values = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    isAdmin,
    userData,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
