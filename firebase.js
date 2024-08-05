// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ3pH_7KvZxdJsflHyYcLl9mDQViTFCGY",
  authDomain: "inventory-management-ecffb.firebaseapp.com",
  projectId: "inventory-management-ecffb",
  storageBucket: "inventory-management-ecffb.appspot.com",
  messagingSenderId: "866241606133",
  appId: "1:866241606133:web:4d9c9be82d81d9a326b0bc",
  measurementId: "G-F3WN8CYHYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}