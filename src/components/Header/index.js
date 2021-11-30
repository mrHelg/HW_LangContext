import React, { Component } from 'react';
import cx from 'classnames';
import { WbSunny } from '@material-ui/icons';
import { NightsStayRounded } from '@material-ui/icons';
import { UserContext, ThemeContext } from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const { theme, setTheme } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <UserContext.Consumer>
      {(user) => (
        <header className={classNames}>
          <p>
            {user.fname} {user.sname}
            {'  '}
          </p>
          <div
            onClick={() => {
              const nextTheme =
                theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
              setTheme(nextTheme);
            }}
          >
            {theme === THEMES.DARK ? <WbSunny /> : <NightsStayRounded />}
          </div>
        </header>
      )}
    </UserContext.Consumer>
  );
};

const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} />
      )}
    </ThemeContext.Consumer>
  );
};

const HeaderWithTheme = WithTheme(Header);

export default HeaderWithTheme;
