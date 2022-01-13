import './App.css';
import React, { useState }  from 'react';
import { TextField } from '@mui/material';
import { useNavigate, Link} from "react-router-dom";

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

function App() {
  function GoButtonOnClick() {
    console.log("changed Page")
    let navigate = useNavigate()
    if (password === "hello") {
      navigate("/example")
    }
    console.log("changed Page")
  }

  const [ password, setPassword ] = useState('');
  return (
    <div className="App">
      <header className="App-header">
      <p>
      Hi! Thanks for taking the time! 
      Please add your name and the password :)
      </p>
    <TextField color="primary" id="outlined-basic" padding="5px" label="Please add your name" variant="outlined"/>
    <TextField name='password' 
               color="warning" 
               id="outlined-basic" 
               padding="5px" 
               label="Please add the password" 
               variant="outlined"
               value={password}
               onChange={e => {
                 setPassword(e.target.value)
                 console.log(password) 
                }
               }/>
    {/* <Button id="Go Button" variant="contained" onClick={e=>GoButtonOnClick()}>Let's Go!</Button> */}
    <nav>
      <ConditionalLink to="/example" condition={password==="hello"}>Let's Go!
      </ConditionalLink>
    </nav>
      </header>
    </div>
  );
}

export default App;
