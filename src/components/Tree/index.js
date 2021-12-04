import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithLang, WithTheme } from './HOCs';
const { THEMES, TITLES } = CONSTANTS;

const Tree = (props) => {
  const { theme, lang } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <div className={classNames}>
      <h2>{TITLES[lang].tree}</h2>
      <Parent />
    </div>
  );
};

const TreeExportComponent = WithTheme(WithLang(Tree));

export default TreeExportComponent;
