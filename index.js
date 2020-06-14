import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './Menu';
import Contact from './Contact';
import Order from './Order';
import {Router,Route,Link,browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
      <Route path = "/" component={App}/>
      <Route path = "/menu" component={Menu}/>
      <Route path = "/contact" component={Contact}/>
      <Route path = "/order" component={Order}/>
  </Router>,document.getElementById('root')
);
