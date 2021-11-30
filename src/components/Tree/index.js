import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import { LangContext } from '../../context';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme } from './HOCs';
const { THEMES, TITLES } = CONSTANTS;

const Tree = (props) => {
  const { theme, setTheme } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <LangContext.Consumer>
      {([lang]) => {
        return (
          <div className={classNames}>
            <h2>{TITLES[lang].tree}</h2>
            <Parent />
          </div>
        );
      }}
    </LangContext.Consumer>
  );
};

const TreeWithTheme = WithTheme(Tree);

export default TreeWithTheme;
