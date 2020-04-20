import React from 'react';
import './App.css';
import Registration from './components/Registration';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Registration /> */}
        <Router>
          <Route exact path='/' component={Login}/>
          <Route exact path='/registration' component={Registration}/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
