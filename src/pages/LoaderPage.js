import React from 'react';
import { Link, Outlet } from "react-router-dom";
import DataLoader from '../components/DataLoader';

function LoaderPage() {

  const loadUsers = ()=>{
    return fetch('/users.json')
    .then((response)=>response.json())
  }
  const loadPhones = ()=>{
    return fetch('/phones.json')
    .then((response)=>response.json())
  }

  const renderUsers = (state) => {
    return ( 
    <ol>
      {state.data.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>)
  }
  const renderPhones = (state) => {
    return ( 
    <ul>
      {state.data.map((phone)=>(
        <li key={phone.id}>{phone.name} {phone.price}</li>
      ))}
    </ul>)
  }
 

  return (
    <div>
      <h1>Loadboard</h1>
      <DataLoader loadData={loadUsers}> 
      {renderUsers}
      </DataLoader>
      <DataLoader  loadData={loadPhones} children={renderPhones}/>
      <Outlet />
      <Link to="/">Home</Link>
    </div>
  );
}
export default LoaderPage;