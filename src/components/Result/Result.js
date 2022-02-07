import React, { useState, useEffect } from 'react';
import auth from '../../auth/auth';
import './Result.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import getComments from '../Result/getComments';

 
export default function Result(props, comment1) {

  //Init constant var
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();

//Get comments and logged in user from previous webpage
  useEffect(() => {
    const loggedInUser = auth.getToken();
    const userComment = getComments.getComments();
      setComment(userComment);
      setEmail(loggedInUser);
    
  }, []);

//We are returning the values of email and comment and using const var to display them on the webpage
  return(
    <><h2 class="tcenter">Thank you: {email}</h2><h3 class="tcenter">Your comments: {comment}</h3></>
  );
}