// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKvbfAWcGtjXw9t8qyCyRdBI7n9FZxL0",
  authDomain: "competition-finder-8ae10.firebaseapp.com",
  projectId: "competition-finder-8ae10",
  storageBucket: "competition-finder-8ae10.firebasestorage.app",
  messagingSenderId: "255180611634",
  appId: "1:255180611634:web:41ac13bc8aa5f470c05c2b",
  measurementId: "G-VND36L4M2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

export async function getAnalyticsInstance() {
  if (typeof window === "undefined") {
    return null;
  }

  const { getAnalytics, isSupported } = await import("firebase/analytics");
  const supported = await isSupported();
  return supported ? getAnalytics(app) : null;
}