import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import { ThemeContext, LangContext } from '../../context';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
const { THEMES, TITLES } = CONSTANTS;

const Tree = (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
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
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;
