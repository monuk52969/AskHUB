// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // optional

const firebaseConfig = {
  apiKey: "AIzaSyDtpdxENXVYMZl6GZkyhU1nn3w0z2NQeJs",
  authDomain: "askhub-a3b3d.firebaseapp.com",
  projectId: "askhub-a3b3d",
  storageBucket: "askhub-a3b3d.appspot.com",
  messagingSenderId: "425170926867",
  appId: "1:425170926867:web:5acf537f04d7bc826eeee6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // optional
