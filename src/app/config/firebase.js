import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BKT,
    messagingSenderId: process.env.REACT_APP_MSG_SDR_ID,
    appId: process.env.REACT_APP_ID
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;