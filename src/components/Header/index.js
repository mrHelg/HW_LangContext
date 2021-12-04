import React from 'react';
import cx from 'classnames';
import { WbSunny, NightsStayRounded } from '@material-ui/icons';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme, WithUser } from '../Tree/HOCs';
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const { theme, setTheme, user } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <>
      <header className={classNames}>
        <p>
          {user.fname} {user.sname} {'  '}
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
    </>
  );
};

const HeaderExportComponent = WithTheme(WithUser(Header));

export default HeaderExportComponent;
