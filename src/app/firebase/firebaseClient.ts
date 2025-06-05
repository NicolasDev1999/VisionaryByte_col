// src/app/firebase/firebaseClient.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKtO385dLJk9SHOqtO-NU2E-WnGdwksLc",
  authDomain: "visionary-byte.firebaseapp.com",
  projectId: "visionary-byte",
  storageBucket: "visionary-byte.appspot.com",
  messagingSenderId: "557189919273",
  appId: "1:557189919273:web:eb308929c0f50a75bd2238",
  measurementId: "G-WE90HY19KY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
