// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBid3soigMdVPlHTK-JH2KcncueDlXAy6g",
    authDomain: "journal-app-a26d1.firebaseapp.com",
    projectId: "journal-app-a26d1",
    storageBucket: "journal-app-a26d1.appspot.com",
    messagingSenderId: "631727223988",
    appId: "1:631727223988:web:a1181c6e5cf4353da113e1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);