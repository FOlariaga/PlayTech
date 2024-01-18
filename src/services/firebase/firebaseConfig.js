import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRtJan5s4PJIexuG-XKW4Ixz_XG1Jb2hA",
  authDomain: "playtech-47028.firebaseapp.com",
  projectId: "playtech-47028",
  storageBucket: "playtech-47028.appspot.com",
  messagingSenderId: "256294890641",
  appId: "1:256294890641:web:4e8726857647e552332330"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)