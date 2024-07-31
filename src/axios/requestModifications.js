import { clearAuthStorage } from "../redux/slice/user/UserSlice";
import { store } from "../redux/store";

export const requestHandler = (request) => {
  const state = store.getState();
  const token = state?.auth?.user?.token || "";
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
};

export const successHandler = (response) => {
  return {
    ...response,
    data: response.data,
  };
};
export const errorHandler = (error) => {
  const { status, data } = error?.response;
  if (
    status === 401 ||
    data?.message === "Unauthorized Access to an operation"
  ) {
    const { dispatch } = store;
    dispatch(clearAuthStorage());
  }
  return Promise.reject(error);
};
