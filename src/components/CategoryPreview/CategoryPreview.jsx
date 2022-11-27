import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.styles.jsx";
import { Preview, PreviewContainer, Title } from "./CategoryPreview.styles.jsx";

const CategoryPreview = (props) => {
  const { title, products } = props;

  return (
    <PreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>

      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </PreviewContainer>
  );
};

export default CategoryPreview;
