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

  return (
    <div>
      <h1>Loadboard</h1>
      <DataLoader loadData={loadUsers} render={
        (state) => {
          return ( 
          <ol>
            {state.data.map((user)=>(
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>)
        }
      }/>
      {/* <DataLoader  loadData={loadPhones} render/> */}
      <Outlet />
      <Link to="/">Home</Link>
    </div>
  );
}
export default LoaderPage;