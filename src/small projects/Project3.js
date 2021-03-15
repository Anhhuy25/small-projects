import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from '../components/project 3/Cart';
import ErrorPage from '../components/project 3/ErrorPage';
import Item from '../components/project 3/Item';
import Main from '../components/project 3/Main';
import Navbar from '../components/project 3/Navbar';
import '../components/project 3/style.css';



const Project3 = () => {

  return (
    <Router className="main">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/:name" children={<Item />}></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>


  );
};

export default Project3;