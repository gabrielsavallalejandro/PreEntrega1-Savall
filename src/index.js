import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Firebase

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOmoeCUPf5kyG6APLxszWs_rPYcM4rHyE",
  authDomain: "proyectofinal-e-comerce.firebaseapp.com",
  projectId: "proyectofinal-e-comerce",
  storageBucket: "proyectofinal-e-comerce.appspot.com",
  messagingSenderId: "968797446691",
  appId: "1:968797446691:web:d78508c470992942950796"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

