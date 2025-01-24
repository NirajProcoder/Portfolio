import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvVUOGeNCty827qXyUDkq_jmoRW2fIeQs",
  authDomain: "procoderportfolio.firebaseapp.com",
  projectId: "procoderportfolio",
  storageBucket: "procoderportfolio.firebasestorage.app",
  messagingSenderId: "43262318394",
  appId: "1:43262318394:web:bf548a5240045f6fc82203",
  measurementId: "G-0JBL1YM0E8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
