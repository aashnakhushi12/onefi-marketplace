import { useEffect, useState } from "react";
import "./Marketplace.css";
import { getProducts } from "../../services/productsService";
import ProductGrid from "../../components/ProductGrid";
import ProductDetails from "../ProductDetails";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

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
      ) : error ? (
        <div className="marketplace-error">
          <p>{error}</p>
          <button type="button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      ) : (
        <ProductGrid products={products} onProductClick={handleProductClick} />
      )}
    </section>
  );
}

export default Marketplace;
