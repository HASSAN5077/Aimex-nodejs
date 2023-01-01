import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const { isAuthenticatedUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticatedUser) {
      navigate("/login");
    }
  }, [isAuthenticatedUser]);

  return <Component />;
};

export default ProtectedRoute;
