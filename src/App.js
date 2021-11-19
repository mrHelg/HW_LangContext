import './App.css';
import React, {Component} from 'react';
import Ciao from './components/CiaoSection/Ciao';
import UserCard from './components/UserCard';
import UsersList from './components/UsersList';

function App(){
  const user = {
    id:1,
    name:'Elon'
  }
  const user2 = {
    id:1,
    fname:'Elon'
  }
  const user3 = {
    id:2,
    fname:'Elon'
  }
  return <>
  <Ciao name={user.name} id={user.id}/>
  <UserCard user={user2}/>
  <UsersList users={[user2, user3]}/>
  </>;
  
}
export default App;