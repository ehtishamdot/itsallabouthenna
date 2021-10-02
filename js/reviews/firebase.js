import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUVOhK0pdFn4jioIpb8wg-dHl1C0vxoL4",
  authDomain: "reviewsforhenna.firebaseapp.com",
  projectId: "reviewsforhenna",
  storageBucket: "reviewsforhenna.appspot.com",
  messagingSenderId: "1079456573535",
  appId: "1:1079456573535:web:f28d17fa0ab5b6418193ea",
  measurementId: "G-X1M85MD6G7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
// const auth = getAuth();
console.log(db);

export { collection, addDoc, db, getDocs };
