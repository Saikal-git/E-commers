import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import Error from "./components/Error";
import Basket from "./components/Basket";

const App = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/createProduct",
      element: <CreateProduct />,
    },
    {
      id: 3,
      link: "/products",
      element: <Products />,
    },
    {
      id: 3,
      link: "*",
      element: <Error />,
    },
    {
      id: 3,
      link: "/basket",
      element: <Basket />,
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        {routes?.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
