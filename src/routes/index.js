import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicRoute, ProtectedRoute } from "./ProtectedRoute";

import NewMovie from "../components/NewMovie";
import CreateMovie from "../components/CreateMovie";
import EditComp from "../components/EditComp";
import MyMovie from "../components/MyMovie";
import Login from "../pages/Login";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/new-movie"
            element={
              <ProtectedRoute>
                <NewMovie />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-movie"
            element={
              <ProtectedRoute>
                <CreateMovie />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-movie"
            element={
              <ProtectedRoute>
                <EditComp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MyMovie />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
