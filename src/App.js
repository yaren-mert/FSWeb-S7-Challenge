import React from "react";
import * as yup from "yup";
import Form from "./Components/Form";
import Home from "./Components/Home";
import "./App.css";
import Store from "./Components/Store";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="baslık">
          <h1>Pizza Lounge</h1>
        </div>
        <div className="links">
          <Link
            className="link"
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "tomato",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px",
              fontWeight: "bold",
              letterSpacing: "1.2px",
            }}
          >
            Ana Sayfa
          </Link>
          <Link
            className="link"
            to="/pizza"
            id="order-pizza"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "tomato",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: "bold",
              letterSpacing: "1.2px",
            }}
          >
            Sipariş Formu
          </Link>
        </div>
      </header>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/pizza" component={Form}></Route>
      </Switch>
    </>
  );
};
export default App;
