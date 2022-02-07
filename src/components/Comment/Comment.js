import React, { useState, useEffect } from 'react';
import auth from '../../auth/auth';
import './Comment.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import getComments from '../Result/getComments';

export default function Comment(props) {

  const [comment, setComment] = useState(); //setting constant var for comments
  const [email, setEmail] = useState();
 
  useEffect(() => { //checking for auth state here 
    const loggedInUser = auth.getToken();
    if (loggedInUser !== "") {
      setEmail(loggedInUser);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    getComments.saveComments(comment); //Call value from getComments and then save comments from const
    console.log(getComments) //log into console for testing 
    props.history.push('/result'); //push into new webpage result.js
  };

  //Once we click submit, this form would be submitted and send to the next .js 
  //We are also setting our comment values with setComment
  return (
    <div className="comment-wrapper">
      <h2>Comments about your current course</h2>
      <br></br>

      <form onSubmit={handleSubmit}> 
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}>

          <TextField id="outlined-basic" label="Email Address" 
          multiline
          defaultValue={email}
            type="text"
            disabled
          />
          <TextField id="outlined-basic" label="Course Name" variant="outlined"
            type="text"
          
  
          />
          <TextField id="outlined-basic" label="Course Code" variant="outlined"
            type="text"
            
      
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Comments"
            multiline
            maxRows={4}
            onChange={e => setComment(e.target.value)}
          />

          <div>

            <Button type="submit" variant="contained" >Submit Review</Button>
          </div>
          <h6>Created by Carlos Cruz-Claro [300-902-439]</h6>
        </Stack>
      </form>
    </div >

  );
}