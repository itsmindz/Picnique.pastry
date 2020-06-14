import React, {Component} from 'react';
import Menu from './Menu';
import Contact from './Contact';
import Order from './Order';

class App extends Component{
  
  render(){
    return(
      <div>
        <h1>Welcome to Picnique Pastry</h1>
        <h2>Make your daily vacation's vibes with us</h2>
        <h2>"PICNIQUE" we PICK the best ingredients and UNIQUE taste of sweets!</h2>
        <h3><a href= "/menu">Menu</a></h3>
        <h3><a href= "/order">Order</a></h3>
        <h3><a href= "/contact">Contact</a></h3>
        
      </div>
    );

  }
}
export default App;
