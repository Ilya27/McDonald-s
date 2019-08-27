import React from 'react';
import {Route,Router } from 'react-router-dom';
import Menu from './screens/menu/Menu';
import Info from './screens/aboutBurger/Info';
import history from './history';
import './App.css';

function  App (){
  return (
    <div>
      <header>
        Header
      </header>
      <main>
        <Router history = {history}>
          <Route exact path="/" component = {Menu} />
          <Route exact path="/:name" component = {Info} />
          {/* <Route exact path="/" component = {} /> */}
        </Router>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
