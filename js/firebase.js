// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfY7D-OYCeriZY5cgFXGKogCjLP2m6E84",
    authDomain: "tictactoeol.firebaseapp.com",
    projectId: "tictactoeol",
    storageBucket: "tictactoeol.appspot.com",
    messagingSenderId: "130490410945",
    appId: "1:130490410945:web:42c77a06bde35aea76f140",
    measurementId: "G-35HL0KFDYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);