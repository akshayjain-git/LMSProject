import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lms-ed-e636c.firebaseapp.com",
  projectId: "lms-ed-e636c",
  storageBucket: "lms-ed-e636c.firebasestorage.app",
  messagingSenderId: "448229676056",
  appId: "1:448229676056:web:725e0a65481d8b3b471f6d",
  measurementId: "G-N0PQBM513B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}