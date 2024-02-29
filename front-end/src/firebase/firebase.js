// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKJW3KJB5pA6cDXO4RiBN8fsjffjrO9Y",
  authDomain: "bookin-6c8dd.firebaseapp.com",
  projectId: "bookin-6c8dd",
  storageBucket: "bookin-6c8dd.appspot.com",
  messagingSenderId: "426227399587",
  appId: "1:426227399587:web:af740b1df2b6c16ef43816",
  measurementId: "G-GXTYZVKY2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
