import React from 'react';
import UserCard from '../UserCard';
import CONSTANTS from '../../../constants';
import { LangContext } from '../../../context';
const { TITLES } = CONSTANTS;

const Child = (props) => {
  return (
    <LangContext>
      {([lang]) => {
        return (
          <div>
            <h2>{TITLES[lang].child}</h2>
            <UserCard />
          </div>
        );
      }}
    </LangContext>
  );
};

export default Child;
