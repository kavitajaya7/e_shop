import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss'

const Directory = ({catergories}) => {
  
  return (
    <div className="categories-container">
      {catergories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
