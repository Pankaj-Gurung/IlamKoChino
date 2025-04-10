import React from "react";
import routes from "./routes";
import "./styles.scss";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

const App = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <Navbar />
      {routing}
    </>
  );
};

export default App;
