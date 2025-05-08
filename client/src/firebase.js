// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "huts4u-1102b.firebaseapp.com",
  projectId: "huts4u-1102b",
  storageBucket: "huts4u-1102b.firebasestorage.app",
  messagingSenderId: "908255679309",
  appId: "1:908255679309:web:6138817cd238b32a17dd04",
  measurementId: "G-J9NC9LX05Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
