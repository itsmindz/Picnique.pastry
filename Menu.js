import React, {Component} from 'react';

class Menu extends Component{
    render(){
      return(
        <div>
            <h1>Menu List</h1>
            <h2>Brownie</h2>
            <h2>Mousse</h2>
            <h2>Waffle</h2>
            <h3><a href= "/order">Order</a></h3>
            <h3><a href= "/">Home</a></h3>

            
        </div>
      );
    }
}
  export default Menu;