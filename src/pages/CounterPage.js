import React,{ Component } from 'react';
import Counter from '../components/Counter';

class CounterPage extends Component{
  state = {
    step:1,
  }

  handlerRange = ({target:{value, name}})=>{
    this.setState({ [name]:Number(value) })
  }

  render(){
    const {step} = this.state;
    return (
      <div>
        <h2>Counter</h2>
        <input type='range' name='step' 
        onChange={this.handlerRange} 
        min='1' max='10' value={step}/>
        <p>current step: {step} </p>
        <Counter step={step}/>
      </div>
    );
  }
  
}

export default CounterPage;
