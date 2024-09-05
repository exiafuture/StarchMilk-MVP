import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const FinishSignIn = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = window.location.href;

    if (isSignInWithEmailLink(auth, currentUrl)) {
      // Store the full URL with all the query parameters in session storage
      sessionStorage.setItem('signInUrl', currentUrl);

      // Clear the URL by navigating without the query params
      navigate('/finishSignIn', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const storedUrl = sessionStorage.getItem('signInUrl');

    // Get the email from localStorage or prompt the user
    const storedEmail = window.localStorage.getItem('emailForSignIn');
    const emailForSignIn = storedEmail || prompt('Please provide your email for confirmation');

    if (storedUrl && emailForSignIn) {
      signInWithEmailLink(auth, emailForSignIn, storedUrl)
        .then((result) => {
          setMessage('You are signed in successfully!');
          window.localStorage.removeItem('emailForSignIn');
          sessionStorage.removeItem('signInUrl');
        })
        .catch((error) => {
          console.error('Error signing in:', error);
          setMessage('Error signing in.');
        });
    }
  }, []);

  return (
    <div>
      <h1>Finish Sign-In</h1>
      <p>{message}</p>
    </div>
  );
};

export default FinishSignIn;
