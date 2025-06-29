
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-dy2Aqt3pfLVh3n-6v3B_p4kghxM9Dmc",
  authDomain: "devblogwithfirebase.firebaseapp.com",
  projectId: "devblogwithfirebase",
  storageBucket: "devblogwithfirebase.firebasestorage.app",
  messagingSenderId: "619918278846",
  appId: "1:619918278846:web:28828f4468db4d9b641eef",
  measurementId: "G-QQ27LZNQJD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
