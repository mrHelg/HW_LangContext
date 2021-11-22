import './App.css';
import React from 'react';

const List = (props)=>{
  const {text, title, children} = props;
  return (
    <>
    <h2>{text}</h2>
    <ul title={title}>
      {children}
    </ul>
    <p>asdfgh</p>
    </>
  );
}

function App(){
 
  
  return <>
    <List title="111" text="qwerty">
      <li>1</li>
      <li>2</li>
    </List>
  </>;
  
}
export default App;





// return React.createElement('ul',{title:"qwerty"},
    // React.createElement('li',{},'1'),
    // React.createElement('li',{},'2')
    // );