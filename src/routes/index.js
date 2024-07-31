import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../components";
import {
  Home,
  LoginPage,
  SignUpPage,
  ForgotPasswordPage,
  ChangePasswordPage,
  // CodeVerificationPage,
  SignupVerificationPage,
  CustomerTypePage,
  BusinessCustomerPage,
  PaymentMethodPage,
  PendingApprovalPage,
  PasswordSuccessfullPage,
  ProfileMainPage,
  // admin section
  AdminLoginPage,

  // Dispatches
  DispatcheMainPage,
  DispatchesDetailsPage,

  // admin custoimer
  CustomerMainPage,
  CustomerDetailsPage,
  UploadDocumentsPage,
  // Drivers
  DriversMainPage,
  PersonalDetailsPage,
  // Job History
  JobHistoryMainPage,

  // Accounting
  AccountingMainPage,
  // Agents
  AgentsMainPage,
  NotFound,
  WalletCreatedPage,
  LinkExpiredPage,
  Forbidden,
  AddCustomerPage,
  AddDriverPage,
  AddDispatchesPage,
  UpdateDriverPage,
} from "../pages";
import { useSelector } from "react-redux";
import {
  PublicRoute,
  ProtectedRoute,
  AdminRoute,
  AdminPublicRoute,
} from "./ProtectedRoute";

const AppRoutes = () => {
  const { user: useInfo = {}, isAuthenticated = false } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
