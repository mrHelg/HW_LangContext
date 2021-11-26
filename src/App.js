import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import Calendar from './components/Calendar';
import SignInForm from './components/SignInForm';
import Dashboard from './pages/Dashboard';
import CounterPage from './pages/CounterPage';

function App(){
  return <>
  <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/sign-in">sign in</Link></li>
        <li><Link to="/dash/messages">messages</Link></li>
        <li><Link to="/dash/tasks">tasks</Link></li>
        <li><Link to="/counter">counter</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/calendar" element={<p>Calendar</p>} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/dash/" element={<Dashboard />}>
        <Route  path="messages" element={<p>messages</p>} />
        <Route path="tasks" element={<p>tasks</p>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <p>&copy;2021</p>
  </BrowserRouter>
  </>;
}

const Home = (props) =>{  return <h2>Home</h2>}
const PageNotFound = (props) =>{ 
    const navigate = useNavigate();
    setTimeout(()=>{navigate(-1)}, 2000);
    return <h2>404,  replace to home</h2>
  }

export default App;

