import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SignIn />
      </>
    ),
  },
]);
export default App;
