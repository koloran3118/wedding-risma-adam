// lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIbjIw-ERnsjZ4CnjAsEMwEgeEIRwdWLc",
  authDomain: "undangan-rismaadam.firebaseapp.com",
  projectId: "undangan-rismaadam",
  storageBucket: "undangan-rismaadam.firebasestorage.app",
  messagingSenderId: "729930177728",
  appId: "1:729930177728:web:ee721910cb6547b1132125"
};

// Cegah inisialisasi ganda di Next.js
let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const db = getFirestore(app);
