import './App.css';
import React, { Component } from 'react';
import { UserContext, ThemeContext, LangContext } from './context';
import Header from './components/Header';
import Tree from './components/Tree';
import CONSTANTS from './constants';
import Footer from './components/Footer';
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: 'Elon',
        sname: 'Musk',
        imgSrc: 'https://i.insider.com/6171279833f4b300189ad407?width=700',
      },
      lang: 'ru',
    };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };
  setLang = (lang) => {
    this.setState({ lang });
  };

  render() {
    const { user, theme, lang } = this.state;
    return (
      <LangContext.Provider value={[lang, this.setLang]}>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={user}>
            <Header />
            <Tree />
            <Footer />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </LangContext.Provider>
    );
  }
}

export default App;
