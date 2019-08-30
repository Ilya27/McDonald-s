import React from 'react';
import {Route,Router } from 'react-router-dom';
import Menu from './screens/menu/Menu';
import BurgerInfo from './screens/aboutBurger/Info';
import history from './history';
import {Provider } from 'react-redux';
import store from './store/store';
import Order from './screens/order/Order';
import Count from './Components/Count'
import './App.css';
function  App (){
  return (
    <div className='App'>
      <header>
        <Provider store={store}>
          <Router history = {history}>
            <Count/>
          </Router>
        </Provider>
      </header>
      <main>
        <Provider store={store}>
          <Router history = {history}>
            <Route exact path="/" component = {Menu} />
            <Route exact path="/order/" component = {Order} />
            <Route exact path="/about/:name" component = {BurgerInfo} />
          </Router>
        </Provider>
      </main>
      {/* <footer >
        Footer
      </footer> */}
    </div>
  );
}

export default App;
