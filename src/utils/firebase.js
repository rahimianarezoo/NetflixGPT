// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy9_rTR16gGiWFGoynN0qR0lpXIihYwNM",
  authDomain: "netflixgpt-5bf2e.firebaseapp.com",
  projectId: "netflixgpt-5bf2e",
  storageBucket: "netflixgpt-5bf2e.appspot.com",
  messagingSenderId: "45511437702",
  appId: "1:45511437702:web:ee4868b2c32f7f0e745007",
  measurementId: "G-EVQ22RJ9L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();