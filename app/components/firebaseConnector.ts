// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "dududuck-da48f.firebaseapp.com",
  projectId: "dududuck-da48f",
  storageBucket: "dududuck-da48f.appspot.com",
  messagingSenderId: "538732237943",
  appId: "1:538732237943:web:d02ce62c9a7595583ba272",
  measurementId: "G-X8FDZXYH6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
