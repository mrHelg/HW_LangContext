import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }
  increment = ()=>{
    this.setState((state, props)=>({count: state.count+props.step}))
  }
  decrement = ()=>{
    this.setState((state, props)=>({count: state.count-props.step}))
  }
  
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.step===this.props.step);
  }
  
  render() {
    const {count} = this.state;
    console.log('render')
    return (
      <div>
        <p>current state: {count} </p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  step:1
}

Counter.propTypes = {
  step: PropTypes.number,
}

export default Counter;
