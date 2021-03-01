import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "e-when-t.firebaseapp.com",
    databaseURL: "https://e-when-t-default-rtdb.firebaseio.com/",
    projectId: "e-when-t",
    storageBucket: "e-when-t.appspot.com",
    messagingSenderId: "27872794554",
    appId: "1:27872794554:web:25872ac70ba7d15a5b2f83"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;