import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../utils/formSchema";

import Home from "./Pages/Home";
import Form from "./Pages/Form";
import OrderComplete from "./Pages/OrderComplete";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
    </>
  );
};
export default App;
