// src/lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYmhzALIojNB2dDhi8vcAiVs2qiRTXZ-0",
  authDomain: "kiransur-461a5.firebaseapp.com",
  projectId: "kiransur-461a5",
  storageBucket: "kiransur-461a5.firebasestorage.app",
  messagingSenderId: "810409852824",
  appId: "1:810409852824:web:0408e70b507c30632a75ed",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
