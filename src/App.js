// import React/Hook/Router...
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import component LAYOUT
import Layout from "./pages/layout/Layout";

// import component
import Home, { loader as loaderHotels } from "./pages/home/Home";
import Detail, { loader as loaderHotelDetail } from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Transactions from "./pages/transactions/Transactions";

//////////////////////
// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: loaderHotels },
      { path: "search", element: <Search /> },
      {
        path: "detail/:hotelID",
        element: <Detail />,
        loader: loaderHotelDetail,
      },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "transactions", element: <Transactions /> },
    ],
  },
]);

//////////////////////
// function component
function App() {
  return <RouterProvider router={router} />;
}

// export
export default App;
