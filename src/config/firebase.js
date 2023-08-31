// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9K2IAiTa2BUR5gEMPY9S7TFtla1V4r5o",
  authDomain: "vite-contact-25734.firebaseapp.com",
  projectId: "vite-contact-25734",
  storageBucket: "vite-contact-25734.appspot.com",
  messagingSenderId: "374914131132",
  appId: "1:374914131132:web:e5297c6f03baf5e7005cb9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);