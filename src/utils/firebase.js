// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA3SyNyiya4QWSOd5LfpPKdZ5B-rX-yHk",
  authDomain: "netflixgpt-96b1b.firebaseapp.com",
  projectId: "netflixgpt-96b1b",
  storageBucket: "netflixgpt-96b1b.firebasestorage.app",
  messagingSenderId: "921663756554",
  appId: "1:921663756554:web:85f3c8bcd36436a3b7c2f3",
  measurementId: "G-GH2VWJ8E1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
