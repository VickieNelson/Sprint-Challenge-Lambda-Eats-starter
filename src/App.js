import React, { useState } from "react";
import "./index.css";

import Home from "./Components/Home";
import Form from "./Components/Form";
import { Route, Link, Switch } from "react-router-dom";

export default function App() {
  const [pizza, setPizza] = useState("");
  return (
    <div className='App'>
      <nav>
        <div>
          {" "}
          <h1 className='store-header'>Lambda Eats</h1>
        </div>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <button className='pizza-btn'>
            <Link to='/pizza'>Create Your Pizza!</Link>
          </button>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form pizza={pizza} />
        </Route>

        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
