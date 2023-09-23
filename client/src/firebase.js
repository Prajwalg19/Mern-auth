// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mernauth-a675b.firebaseapp.com",
    projectId: "mernauth-a675b",
    storageBucket: "mernauth-a675b.appspot.com",
    messagingSenderId: "692120473342",
    appId: "1:692120473342:web:a875b045b6c5122c035faf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
