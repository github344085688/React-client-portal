import './assets/css/unis.css';
import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router , Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import { routerConfig }  from "./router/router";
export default class  App extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Redirect path="/" to="/home" />
            {renderRoutes(routerConfig)}
          </Router>
        </Provider>
      </React.StrictMode>
    )
  }
}


