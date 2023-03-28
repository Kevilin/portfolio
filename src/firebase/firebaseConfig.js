// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZfuel8I1rJDyyLUPed7Smfq5zrm260-w",
  authDomain: "portfolio-admin-baa59.firebaseapp.com",
  projectId: "portfolio-admin-baa59",
  storageBucket: "portfolio-admin-baa59.appspot.com",
  messagingSenderId: "482752831954",
  appId: "1:482752831954:web:fa93e6e55b74eed711680b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
