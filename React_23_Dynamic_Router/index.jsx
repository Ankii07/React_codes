import { createRoot } from "react-dom/client";
import App from "./App";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // agr dynamic router bnana ho to hum colon lagate hai
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:Country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
