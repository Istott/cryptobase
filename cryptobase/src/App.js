import React from 'react';
// import './App.css';

import { css } from 'linaria';
import { styled } from 'linaria/react';

const appStyle = css`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const MyButton = styled.button`
  color: white;
  /* border: 2px blue solid; */
  border-radius: 5px;
  background-color: lightseagreen;
  margin: 1%;
`;

function App() {

  

  return (
    <div className={appStyle}>
      <h1>Hello</h1> 
      <input
        type='input'
      />

      <MyButton>Submit</MyButton>
    </div>
  );
}

export default App;
