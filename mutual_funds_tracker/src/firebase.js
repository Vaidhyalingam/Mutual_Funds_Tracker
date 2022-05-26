import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfG4-JxbO2SxwN_MaFubiXkgUwT_7sxQY",
  authDomain: "mutual-funds-tracker-db046.firebaseapp.com",
  projectId: "mutual-funds-tracker-db046",
  storageBucket: "mutual-funds-tracker-db046.appspot.com",
  messagingSenderId: "288147701257",
  appId: "1:288147701257:web:e613b49138f5f2048202d8",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
