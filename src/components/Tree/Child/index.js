import React from 'react';
import UserCard from '../UserCard';
import CONSTANTS from '../../../constants';
import { WithLang } from '../HOCs';
const { TITLES } = CONSTANTS;

const Child = (props) => {
  const {lang} = props;
  return (
    <div>
      <h2>{TITLES[lang].child}</h2>
      <UserCard />
    </div>
  );
};

const ChildExportElement = WithLang(Child);

export default ChildExportElement;
