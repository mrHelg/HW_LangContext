import React from 'react';
import { LangContext } from '../../../context';
import Child from '../Child';
import CONSTANTS from '../../../constants';

const { TITLES } = CONSTANTS;

const Parent = (props) => {
  return (
    <LangContext>
      {([lang]) => {
        return (
          <div>
            <h2>{TITLES[lang].parent}</h2>
            <Child />
          </div>
        );
      }}
    </LangContext>
  );
};

export default Parent;
