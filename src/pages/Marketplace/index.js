import { useEffect, useState } from "react";
import "./Marketplace.css";
import { getProducts } from "../../services/productsService";
import ProductGrid from "../../components/ProductGrid";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product) => {
    console.log("Selected product:", product);
  };

  return (
    <section className="marketplace-section">
      <div className="marketplace-header">
        <div>
          <p className="marketplace-label">SHOP</p>
          <h2>1Fi Marketplace</h2>
        </div>
      </div>

      {loading ? (
        <div className="marketplace-loading">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <ProductGrid products={products} onProductClick={handleProductClick} />
      )}
    </section>
  );
}

export default Marketplace;
