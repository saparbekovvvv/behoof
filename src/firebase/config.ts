import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

function firebaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyBV-sGbA5iQwU1xtY3ulVmxNNihAXGukmU",
    authDomain: "behoof-33f5c.firebaseapp.com",
    projectId: "behoof-33f5c",
    storageBucket: "behoof-33f5c.appspot.com",
    messagingSenderId: "358981927786",
    appId: "1:358981927786:web:8d902084dc33ab12b25b13",
    measurementId: "G-96B48TENCJ",
  };
  const app = initializeApp(firebaseConfig);
  getDatabase(app);
  getAuth(app);
}

export default firebaseInit;
