import React, {useState} from 'react';
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

  const [name, setName] = useState({
    name: '',
  });

  console.log(name);

  const handleChanges = event => {
    setName({ ...name, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();

    
  };

  

  return (
    <div className={appStyle}>
      <h1>CRYPTOBASE</h1> 
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={handleChanges}
          value={name.name}
        />

        <MyButton type='submit'>Submit</MyButton>
      </form>
      <h2>{name.name}</h2>

    </div>
  );
}

export default App;
