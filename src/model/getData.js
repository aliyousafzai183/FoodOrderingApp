import db from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const fetchData = async () => {
    const itemsRef = collection(db, "items");
    const querySnapshot = await getDocs(itemsRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  };

  const fetchCategories = async () => {
    const itemsRef = collection(db, "categories");
    const querySnapshot = await getDocs(itemsRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  };
  
  export {fetchCategories, fetchData};