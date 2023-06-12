// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASY-ANUtPhv10SZmb0aj7PzwPW4QlXej4",
  authDomain: "chatapp-944ff.firebaseapp.com",
  projectId: "chatapp-944ff",
  storageBucket: "chatapp-944ff.appspot.com",
  messagingSenderId: "324439766917",
  appId: "1:324439766917:web:952de11343a179f41036ec",
  measurementId: "G-F2BY2WRP70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;