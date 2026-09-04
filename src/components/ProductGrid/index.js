import "./ProductGrid.css";
import ProductCard from "../ProductCard";

function ProductGrid({ products, onProductClick }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
