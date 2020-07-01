import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Productss/Products';
import Login from './components/Login'


function App() {
  return (
    <>
      <Route path="/" component={NavBar}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
