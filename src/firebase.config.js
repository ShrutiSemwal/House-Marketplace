import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNdA7yzB-lKBf7540MdrYYQoeZ1oLPX_c",
  authDomain: "house-marketplace-app-9b7c9.firebaseapp.com",
  projectId: "house-marketplace-app-9b7c9",
  storageBucket: "house-marketplace-app-9b7c9.appspot.com",
  messagingSenderId: "821824371797",
  appId: "1:821824371797:web:b84cbf5f8b0ec20062a8dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
