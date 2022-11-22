import { Fragment, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../context/Categories.context";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title.toUpperCase()}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default Shop;
