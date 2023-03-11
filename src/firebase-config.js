import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVKDif-mjduvPouWeUO2fLZxmzKZ9y-xI",
  authDomain: "kingdomcrm-77669.firebaseapp.com",
  projectId: "kingdomcrm-77669",
  storageBucket: "kingdomcrm-77669.appspot.com",
  messagingSenderId: "291773471837",
  appId: "1:291773471837:web:0f2cb1dfd4d9bfcd4641b4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
