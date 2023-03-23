// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFP-aUg9ulfUe4a4OanFSW82MqZ-PoQpQ",
  authDomain: "walruscodechat.firebaseapp.com",
  projectId: "walruscodechat",
  storageBucket: "walruscodechat.appspot.com",
  messagingSenderId: "419892519286",
  appId: "1:419892519286:web:8bbdea0da03226ead29a57",
  measurementId: "G-S5WMJC9YLQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);