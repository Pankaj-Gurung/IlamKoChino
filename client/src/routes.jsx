import React from "react";
import Home from "./pages/home/home.page";
import Contact from "./pages/contact/contact.page";
import Shop from "./pages/shop/shop.page";
import Aboutus from "./pages/about/aboutus.page";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shop", element: <Shop /> },
  { path: "/aboutus", element: <Aboutus /> },
];

export default routes;
