// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfzxBLMYbvYJjm2gr6rbxnPLBdrcbXhcg",
  authDomain: "recipefinder-906e6.firebaseapp.com",
  projectId: "recipefinder-906e6",
  storageBucket: "recipefinder-906e6.appspot.com",
  messagingSenderId: "897703644339",
  appId: "1:897703644339:web:26f48aa1ed80db8808f4c6",
  measurementId: "G-HLDZ5BZP3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);