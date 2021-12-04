import React, { Component } from 'react';
import cx from 'classnames';
import { LangContext } from '../../context';
import styles from './Footer.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme } from '../Tree/HOCs';
const { THEMES, TITLES } = CONSTANTS;

const Footer = (props) => {
  const { theme} = props;
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
};

const FooterWithTheme = WithTheme(Footer);

export default FooterWithTheme;
