import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/project 5/Main';
import ErrorPage from '../components/project 5/ErrorPage';
import Navbar from '../components/project 5/Navbar';
import From2to4 from '../components/project 5/From2to4';
import From4to7 from '../components/project 5/From4to7';
import Over20 from '../components/project 5/Over20';
import From32to64 from '../components/project 5/From32to64';
import From128to256 from '../components/project 5/From128to256';

const Project5 = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/tu-2-4-trieu" children={<From2to4 />}></Route>
        <Route path="/tu-4-7-trieu" children={<From4to7 />}></Route>
        <Route path="/tren-20-trieu" children={<Over20 />}></Route>
        <Route path="/rom-32-den-64gb" children={<From32to64 />}></Route>
        <Route path="/rom-128-den-256gb" children={<From128to256 />}></Route>
        <Route path="/rom-32-den-256gb"></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Project5;