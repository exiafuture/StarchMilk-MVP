import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const FinishSignIn = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const storedEmail = window.localStorage.getItem('emailForSignIn');
      if (!storedEmail) {
        setEmail(prompt('Please provide your email for confirmation'));
      } else {
        setEmail(storedEmail);
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          setMessage('You are signed in successfully!');
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {
          console.error('Error signing in:', error);
          setMessage('Error signing in.');
        });
    }
  }, [email]);

  return (
    <div>
      <h1>Finish Sign-In</h1>
      <p>{message}</p>
    </div>
  );
};

export default FinishSignIn;
