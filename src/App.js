import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { 
  sendSignInLinkToEmail, 
  signInWithEmailLink, 
  isSignInWithEmailLink, 
  onAuthStateChanged 
} from 'firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen to authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    const storedUrl = sessionStorage.getItem('signInUrl');

    if (isSignInWithEmailLink(auth, currentUrl)) {
      const emailForSignIn = window.localStorage.getItem('emailForSignIn');
      
      if (emailForSignIn) {
        signInWithEmailLink(auth, emailForSignIn, currentUrl)
          .then(() => {
            setMessage('You are signed in successfully!');
            window.localStorage.removeItem('emailForSignIn');
            sessionStorage.removeItem('signInUrl');
            window.history.replaceState({}, document.title, '/'); // Clean URL
          })
          .catch((error) => {
            console.error('Error signing in:', error.code, error.message);
            setMessage(`Error signing in: ${error.message}`);
          });
      }
    }
  }, []);

  const handleSendLink = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const actionCodeSettings = {
      url: window.location.href, // Ensure this matches your domain
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      sessionStorage.setItem('signInUrl', window.location.href);
      setMessage('Check your email for the sign-in link.');
    } catch (error) {
      console.error('Error sending email link:', error.code, error.message);
      setMessage(`Error sending email link: ${error.message}`);
    }
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setMessage('Signed out successfully.');
    }).catch((error) => {
      console.error('Error signing out:', error.code, error.message);
      setMessage(`Error signing out: ${error.message}`);
    });
  };

  const handleDeleteAccount = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await user.delete();
        setMessage('Account deleted successfully.');
      } catch (error) {
        console.error('Error deleting account:', error.code, error.message);
        setMessage(`Error deleting account: ${error.message}`);
      }
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={handleSignOut}>Sign Out</button>
        <button onClick={handleDeleteAccount}>Delete Account</button>
        <p>{message}</p>
      </div>
    );
  }

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

export default App;
