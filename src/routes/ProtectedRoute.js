import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Navigate to="/upload-document" replace={true} />;
  }
  return children;
};

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/loin" replace={true} />;
};
