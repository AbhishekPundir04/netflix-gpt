import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDrP5PF60RC0TW-JUMPEh9yAz9Z7QmoZo",
  authDomain: "netflixgpt-8cfd9.firebaseapp.com",
  projectId: "netflixgpt-8cfd9",
  storageBucket: "netflixgpt-8cfd9.appspot.com",
  messagingSenderId: "928730320492",
  appId: "1:928730320492:web:7d638cbc398cba4aa95249",
  measurementId: "G-7ESHJ6467Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth()