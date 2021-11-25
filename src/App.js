import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Calendar from './components/Calendar';
import SignInForm from './components/SignInForm';

function App(){
  return <>
  <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/sign-in">sign in</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} >
      </Route>
      <Route exact path="/calendar" element={<Calendar />} ></Route>
      <Route exact path="/sign-in" element={<SignInForm />} ></Route>
    </Routes>
    <p>&copy;2021</p>
  </BrowserRouter>
  </>;
}

const Home = (props) =>{  return <h2>Home</h2>}

export default App;

