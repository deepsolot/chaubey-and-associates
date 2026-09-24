import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ REPLACE these placeholder values with your actual Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCjSymrKhXD8aArkrgSJh04xRWWSKWFCSs",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mk-associates.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mk-associates",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mk-associates.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "167028770211",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:167028770211:web:ff045b6751a0ed20498616",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Admin Gmails — authorized accounts with write/manage access
export const ADMIN_EMAILS = [
  "maddydragon85@gmail.com",
  "deepaksolot@gmail.com"
];
export const ADMIN_EMAIL = ADMIN_EMAILS[0];

export { app, auth, db, googleProvider };
