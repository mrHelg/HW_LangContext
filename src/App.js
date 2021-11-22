import './App.css';
import React from 'react';
import SignInForm from './components/SignInForm';
import Calendar from './components/Calendar';
import Ciao from './components/CiaoSection/Ciao';

function App(){
 
  return <>
  <Calendar/>
  <Ciao id={1} name="Elon"/>
  <SignInForm />
  </>;
  
}
export default App;