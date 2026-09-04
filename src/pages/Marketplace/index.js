import { useEffect, useState } from "react";
import "./Marketplace.css";
import { getProducts } from "../../services/productsService";
import ProductGrid from "../../components/ProductGrid";
import ProductDetails from "../ProductDetails";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      ) : (
        <ProductGrid products={products} onProductClick={handleProductClick} />
      )}
    </section>
  );
}

export default Marketplace;
