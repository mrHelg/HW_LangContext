import './App.css';
import React from 'react';
import Ciao from './components/CiaoSection/Ciao';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';

function App(){
  return <>
    <FlexContainer jc='space-between' 
    ai='center' fd='column' fw='wrap' 
    title='@@@' style={{border:'1px solid red'}}
    >
      <Ciao id={2} name="Elon"/>
      <Ciao id={3} name="Elen"/>
      <Ciao id={4} name="Alex"/>
    </FlexContainer>
    {/* <Calendar /> */}
  </>;
}
export default App;

