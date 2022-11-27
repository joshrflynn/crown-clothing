import { useContext } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "../../context/Categories.context";

const CategoriesList = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-list-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesList;
