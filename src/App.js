import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../utils/formSchema";

import Home from "./Pages/Home";
import Form from "./Pages/Form";
import OrderComplete from "./Pages/OrderComplete";

const App = () => {
  const [order, setOrder] = useState([]);
  return (
    <>
      {/* Headline */}
      <h1>Lambda Eats</h1>

      {/* home route */}
      <Route exact path='/'>
        <Home />
      </Route>

      {/* pizza route */}
      <Route path='/pizza'>
        <Form order={order} setOrder={setOrder} />
      </Route>

      {/* order route */}
      <Route path='/order'>
        <OrderComplete order={order} />
      </Route>
    </>
  );
};
export default App;
