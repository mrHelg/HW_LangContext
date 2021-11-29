import './App.css';
import React, {Component} from 'react';
import {UserContext, ThemeContext} from './context';
import Header from './components/Header';
import Tree from './components/Tree';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      theme:THEMES.LIGHT,
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://i.insider.com/6171279833f4b300189ad407?width=700'
      }
    }
  }
  
  setTheme = (theme) => {this.setState({theme})}

  render(){
    const {user, theme} = this.state;
    console.log(UserContext);
    return <ThemeContext.Provider value={[theme,this.setTheme]}>
      <UserContext.Provider value={user}>
        <Header />
        <Tree/>
        </UserContext.Provider>
      </ThemeContext.Provider>;
  }
  
}

export default App;

