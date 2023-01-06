import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKR2hjTRIn2urSa35dPmQy4H6bx88xeAE",
  authDomain: "react-netflix-clone-72938.firebaseapp.com",
  projectId: "react-netflix-clone-72938",
  storageBucket: "react-netflix-clone-72938.appspot.com",
  messagingSenderId: "682033427979",
  appId: "1:682033427979:web:28271acdf5dbb34992390e",
  measurementId: "G-BZDHHJ0DWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);