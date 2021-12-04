import React from 'react';
import Child from '../Child';
import CONSTANTS from '../../../constants';
import { WithLang } from '../HOCs';

const { TITLES } = CONSTANTS;

const Parent = (props) => {
  const {lang} = props;
  return (
    <div>
      <h2>{TITLES[lang].parent}</h2>
      <Child />
    </div>
  );
};

const ParentExportComponent = WithLang(Parent);

export default ParentExportComponent;
