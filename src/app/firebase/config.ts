'use client'
// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAuU6QBqN_iRzCZDQug4Mz7ORZFlCvt7vw",
    authDomain: "test-vm-candp.firebaseapp.com",
    projectId: "test-vm-candp",
    storageBucket: "test-vm-candp.appspot.com",
    messagingSenderId: "779122341675",
    appId: "1:779122341675:web:269140fe382e9cc035f76e"
  };
  

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
export {app, auth}