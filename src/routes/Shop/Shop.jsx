import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/Products.context";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
