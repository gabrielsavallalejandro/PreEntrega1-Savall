import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";

import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";


// COMPONENTS

const CategoriesItem = () => {
  const [categorieData, setCategorieData] = useState([]);

  let { categorie } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      const q = query(collection(db, "items"), where("categorie", "==", categorie));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCategorieData(docs);
    };
    getCategories();
  }, [categorie]);

  return (
    <div style={{height:'200px'}}>
    <div 
      style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: '20px', padding:'10px'}}
    >
      {categorieData.map((data) => {
        return <ItemDetailContainer data={data} key={data.id} />;
      })}
    </div>
    </div>
  );
};

export default CategoriesItem;
