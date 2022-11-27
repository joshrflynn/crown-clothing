import { Routes, Route } from "react-router-dom";
import CategoriesList from "../CategoriesList/CategoriesList";
import Category from "../Category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesList />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
