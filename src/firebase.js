import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB09kmkGhEPkn2e-29PgJa1q7sGE1czmM8",
    authDomain: "tictactoeproject-8c832.firebaseapp.com",
    projectId: "tictactoeproject-8c832",
    storageBucket: "tictactoeproject-8c832.appspot.com",
    messagingSenderId: "931852220905",
    appId: "1:931852220905:web:4cf6c88da5efa922db3378"
};

firebase.initializeApp(firebaseConfig);

export default firebase;