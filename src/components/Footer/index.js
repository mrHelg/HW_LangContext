import React, { Component } from 'react';
import cx from 'classnames';
import { ThemeContext, LangContext } from '../../context';
import styles from './Footer.module.scss';
import CONSTANTS from '../../constants';
const { THEMES, TITLES } = CONSTANTS;

class Footer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const classNames = cx(styles.container, {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <LangContext.Consumer>
              {([lang, changeLang]) => {
                return (
                  <footer className={classNames}>
                    <p>{TITLES[lang].selectLang}: </p>
                    <select
                      onChange={({ target: { value } }) => {
                        changeLang(value);
                      }}
                    >
                      {Object.keys(TITLES).map((item) => {
                        return (
                          <option value={item} selected={item === lang}>
                            {TITLES[item].langName}
                          </option>
                        );
                      })}
                    </select>
                  </footer>
                );
              }}
            </LangContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Footer;
