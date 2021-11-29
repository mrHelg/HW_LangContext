import './App.css';
import React, {Component} from 'react';
import {UserContext} from './context';
import Header from './components/Header';
import Tree from './components/Tree';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://i.insider.com/6171279833f4b300189ad407?width=700'
      }
    }
  }
  
  render(){
    const {user} = this.state;
    console.log(UserContext);
    return <UserContext.Provider value={user}>
      <Header />
      <Tree/>
      </UserContext.Provider>;
  }
  
}



export default App;

