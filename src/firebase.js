// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFUpLCTtPv8BTRwOC5NxAhfxygh0cgvZo",
  authDomain: "kelas-x-3-781e0.firebaseapp.com",
  projectId: "kelas-x-3-781e0",
  storageBucket: "kelas-x-3-781e0.appspot.com",
  messagingSenderId: "840099918326",
  appId: "1:840099918326:web:e5edbb692042250d07d7d7",
  measurementId: "G-XHH7QT6SSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();