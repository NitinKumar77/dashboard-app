import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/UI/Dashboard";

const UsersListPage = lazy(() => import("./pages/UsersListPage"));
const ProductListPage = lazy(() => import("./pages/ProductListPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <UsersListPage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense>
            <ProductListPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
