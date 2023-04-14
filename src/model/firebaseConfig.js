import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDs9SPk7xPJuvSiYOKGIh7icbY76p3qUjU",
    authDomain: "pizzadeliveryapp-a12a3.firebaseapp.com",
    projectId: "pizzadeliveryapp-a12a3",
    storageBucket: "pizzadeliveryapp-a12a3.appspot.com",
    messagingSenderId: "779117311585",
    appId: "1:779117311585:web:ac3299b018781a54c1dc20",
    measurementId: "G-QQ5S7M9HVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Read data from Firebase Firestore
const itemsRef = collection(db, "items");
getDocs(itemsRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

export default db;