import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOmoeCUPf5kyG6APLxszWs_rPYcM4rHyE",
  authDomain: "proyectofinal-e-comerce.firebaseapp.com",
  projectId: "proyectofinal-e-comerce",
  storageBucket: "proyectofinal-e-comerce.appspot.com",
  messagingSenderId: "968797446691",
  appId: "1:968797446691:web:d78508c470992942950796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);