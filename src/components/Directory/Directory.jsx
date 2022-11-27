import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./Directory.styles.jsx";
import { CategoriesContainer } from "./Directory.styles.jsx";

export default function Directory(props) {
  const { categories } = props;

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
}
