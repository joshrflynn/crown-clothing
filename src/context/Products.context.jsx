import { useState, useEffect } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../util/firebase/Firebase.util.js";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products] = useState([]);
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  });
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
