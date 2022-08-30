import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.scss";

export default function Directory(props) {
  const { categories } = props;

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category}></CategoryItem>;
      })}
    </div>
  );
}
