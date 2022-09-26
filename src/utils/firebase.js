// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKfeLj0rA4UWGhbDI2s7EFbhI3BnakfQ",
  authDomain: "e-commerce-react-coderho-22fa1.firebaseapp.com",
  projectId: "e-commerce-react-coderho-22fa1",
  storageBucket: "e-commerce-react-coderho-22fa1.appspot.com",
  messagingSenderId: "123703224443",
  appId: "1:123703224443:web:6bfc874ed8f8c088bd9ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app)