import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const { auth } = useContext(AuthContext);
  const { isAuthenticated } = auth;

  if (isAuthenticated) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;

// DRY : Dont repeat yourself
//  PrivateRoute
//  Check auth | not auth
//  auth => return target page
//  auth => return login page
