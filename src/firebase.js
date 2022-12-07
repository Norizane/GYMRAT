// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZmgOGARnG0hZbH7kNBxdiIi3bmvkLiQ8",
    authDomain: "gym-rat-dfc33.firebaseapp.com",
    projectId: "gym-rat-dfc33",
    storageBucket: "gym-rat-dfc33.appspot.com",
    messagingSenderId: "479284888766",
    appId: "1:479284888766:web:a33f6d746327b667dccaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);