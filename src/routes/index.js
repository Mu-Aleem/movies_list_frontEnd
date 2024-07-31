import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicRoute, ProtectedRoute } from "./ProtectedRoute";

import NewMovie from "../components/NewMovie";
import CreateMovie from "../components/CreateMovie";
import EditComp from "../components/EditComp";
import MyMovie from "../components/MyMovie";
import SignIn from "../pages/SignIn";
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
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/new-movie"
            element={
              <PublicRoute>
                <NewMovie />
              </PublicRoute>
            }
          />
          <Route
            path="/add-movie"
            element={
              <PublicRoute>
                <CreateMovie />
              </PublicRoute>
            }
          />
          <Route
            path="/edit-movie"
            element={
              <PublicRoute>
                <EditComp />
              </PublicRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <PublicRoute>
                <MyMovie />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
