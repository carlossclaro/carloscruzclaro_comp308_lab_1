import React, { useState } from 'react';
import auth from '../../auth/auth';
import './Login.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login(props) {

  //Constant declares
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//Handle our function for submitting
  const handleSubmit = e => {
     if (email === "" || password === "") {
      <Alert severity="error">This is an error alert — check it out!</Alert>
      return;

    }
    e.preventDefault();
   
    auth.onAuthentication();
    auth.saveToken(email); //Our token is our email and we are calling it to auth.js
    props.history.push('/comment'); //pushing to new .js webpage
  };


  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}>

    
          <h1>Login</h1>


          <TextField id="outlined-basic" label="Email Address" variant="outlined" 
          type="text" 
          onChange={e => setEmail(e.target.value)}/>
       
       

          <TextField id="outlined-basic" label="Password"
            variant="outlined"
            type="password" 
            onChange={e => setPassword(e.target.value)} />
       
        <div>
 
          <Button type="submit" variant="contained">Log me in!</Button>
        </div>
        <h6>Created by Carlos Cruz-Claro [300-902-439]</h6>
</Stack>
      </form>
    </div >
    
  );
}



