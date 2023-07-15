import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKmRFYDG2WzlEwpcqwm6Qz9yhYHlzjuh8",
  authDomain: "jobbifyy-a4eaf.firebaseapp.com",
  projectId: "jobbifyy-a4eaf",
  storageBucket: "jobbifyy-a4eaf.appspot.com",
  messagingSenderId: "130711737407",
  appId: "1:130711737407:web:129c0b0ef650916774d48a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFireStore(app);

export { auth };
