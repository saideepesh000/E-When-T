import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "t",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
