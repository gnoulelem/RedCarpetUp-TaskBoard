// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWFGRKd0Zoix7PoMuQbjiSQWXckHor_IQ",
  authDomain: "redcarpetup-taskboard.firebaseapp.com",
  projectId: "redcarpetup-taskboard",
  storageBucket: "redcarpetup-taskboard.appspot.com",
  messagingSenderId: "344871326601",
  appId: "1:344871326601:web:a57df4a8a16fc2218e0758",
  measurementId: "G-YNMPN2TLP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);