// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9d58cSgxgPlqS6kumI5AbPczni5HKnc8",
  authDomain: "netfliexgpt-98ba4.firebaseapp.com",
  projectId: "netfliexgpt-98ba4",
  storageBucket: "netfliexgpt-98ba4.firebasestorage.app",
  messagingSenderId: "1069425282668",
  appId: "1:1069425282668:web:4b9e6683ac2fb9c8e39249",
  measurementId: "G-D2QKPM87QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
