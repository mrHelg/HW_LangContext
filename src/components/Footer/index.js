import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Footer.module.scss';
import CONSTANTS from '../../constants';
import { WithLang, WithTheme } from '../Tree/HOCs';
const { THEMES, TITLES } = CONSTANTS;

const Footer = (props) => {
  const { theme, lang, setLang } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <footer className={classNames}>
      <p>{TITLES[lang].selectLang}: </p>
      <select
        onChange={({ target: { value } }) => {
          setLang(value);
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
};

const FooterExportComponent = WithTheme(WithLang(Footer));

export default FooterExportComponent;
