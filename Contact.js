import React, {Component} from 'react';

class Contact extends Component{
  constructor(){
    super();
    this.state={
      ig:"Instagram",
      line:"Line"
    };

    this.changeIg=this.changeIg.bind(this);
    this.changeLine=this.changeLine.bind(this);
  }
  changeIg(){
    this.setState({ig:"@picnique.pastry"});
  }
  changeLine(){
    this.setState({line:"@picnique.pastry"})
  }
  render(){
    return(
      <div>
            <h1>Contact</h1>
            <h2>{this.state.ig}</h2>
            <button onClick={this.changeIg}>{this.state.ig}</button><br/>
            <h2>{this.state.line}</h2>
            <button onClick={this.changeLine}>{this.state.line}</button><br/>
            <h3><a href= "/">Home</a></h3>
            
      </div>
    );
  }
  }
  export default Contact;