import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bbd08.firebaseapp.com",
  projectId: "reactchat-bbd08",
  storageBucket: "reactchat-bbd08.appspot.com",
  messagingSenderId: "704514814430",
  appId: "1:704514814430:web:4cfa910882474e52caad4f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
