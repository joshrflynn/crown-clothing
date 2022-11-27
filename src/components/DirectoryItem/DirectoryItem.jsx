import "./DirectoryItem.styles.jsx";
import {
  BackgroundImage,
  DirectoryBody,
  DirectoryContainer,
  CategoryLink,
} from "./DirectoryItem.styles.jsx";

export default function DirectoryItem(props) {
  const { category } = props;
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={category.imageUrl} />
      <DirectoryBody>
        <CategoryLink to={`/shop/${category.title.toLowerCase()}`}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </CategoryLink>
      </DirectoryBody>
    </DirectoryContainer>
  );
}
