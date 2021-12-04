import './App.css';
import React, { Component } from 'react';
import { UserContext, ThemeContext, LangContext } from './context';
import CONSTANTS from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Tree from './components/Tree';
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: 'Olga',
        sname: 'Kuprin',
        imgSrc:
          'https://mariokomi.ru/wp-content/uploads/krasivaya-devushka-v-ochkah.jpg',
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
