import React, {Component} from 'react';

class Order extends Component{
  constructor(){
    super();
    this.state={
      classicBR:"price",
      bite:"price",
      mousse:"price",
      wafel:"price"

    };

    this.changeBR=this.changeBR.bind(this);
    this.changeBite=this.changeBite.bind(this);
    this.changeMousse=this.changeMousse.bind(this);
    this.changeWafel=this.changeWafel.bind(this);
  }
  changeBR(){
    this.setState({classicBR :"฿35/pcs"});
  }
  changeBite(){
    this.setState({bite:"฿129/bottle"})
  }
  changeMousse(){
    this.setState({mousse:"฿89/box"})
  }
  changeWafel(){
    this.setState({wafel:"฿95/pack/4 pcs"})
  }
    render(){
      return(
        <div>
          <h1>Order</h1>
          <h2>Brownie</h2>
          <h4>- Classic brownie (piece)</h4>
          <button onClick={this.changeBR}>{this.state.classicBR}</button><br/>
          <h4>- Brownie bite (bottle)</h4>
          <button onClick={this.changeBite}>{this.state.bite}</button><br/>

          <h2>Mousse</h2>
          <h4>- Chocolate Mousse (box)</h4>
          <button onClick={this.changeMousse}>{this.state.mousse}</button><br/>

          <h2>Waffle</h2>
          <h4>- Classic Stroopwafel (1 pack/4 pcs)</h4>
          <button onClick={this.changeWafel}>{this.state.wafel}</button><br/>

          <h4><a href= "/">Home</a></h4>
        </div>
      );
    }
  
  }
  export default Order;