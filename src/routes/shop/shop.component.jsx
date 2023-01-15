import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../component/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((products) => {
        return (
          <div>
            <ProductCard key={products.id} products={products} />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
