// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAIp0nMtCYr_2war6bvMPaPo21-C8jrFco",
	authDomain: "pokestore-cc661.firebaseapp.com",
	projectId: "pokestore-cc661",
	storageBucket: "pokestore-cc661.appspot.com",
	messagingSenderId: "579770460189",
	appId: "1:579770460189:web:15ec636007010df38f7ef4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
