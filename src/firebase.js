import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "swiftfirstauth.firebaseapp.com",
  projectId: "swiftfirstauth",
  storageBucket: "swiftfirstauth.appspot.com",
  messagingSenderId: "303635142569",
  appId: "1:303635142569:web:14ac6cb3c35784810e96b8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };