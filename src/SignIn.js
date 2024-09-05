import React, { useState } from 'react';
import { auth } from './firebase';
import { sendSignInLinkToEmail } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = async () => {
    const actionCodeSettings = {
      url: 'http://localhost:3000/finishSignIn', // URL to redirect back to after email link is clicked
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      setMessage('Check your email for the sign-in link.');
    } catch (error) {
      console.error('Error sending email link:', error);
      setMessage('Error sending email link.');
    }
  };

  return (
    <div>
      <h1>Sign In with Email Link</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSendLink}>Send Sign-In Link</button>
      <p>{message}</p>
    </div>
  );
};

export default SignIn;
