// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiM4NWE6rq2PZWbV37GqhfNWWlBb_23aE",
  authDomain: "jobportal-1457b.firebaseapp.com",
  projectId: "jobportal-1457b",
  storageBucket: "jobportal-1457b.appspot.com",
  messagingSenderId: "493883327995",
  appId: "1:493883327995:web:2e6ccbeff77814fbbb375e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};