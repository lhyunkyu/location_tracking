// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2H99EsfNIiLjBGFSDIv5MeJ9ixpjrwA",
  authDomain: "location-tracking-99490.firebaseapp.com",
  projectId: "location-tracking-99490",
  storageBucket: "location-tracking-99490.firebasestorage.app",
  messagingSenderId: "444033636411",
  appId: "1:444033636411:web:7e17e4d70af3cdd3c2e41e",
  measurementId: "G-3JW3RL43ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);