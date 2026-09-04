import "./ProductDetails.css";

function ProductDetails({ product, onBack }) {
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-details-empty">
          <h2>Product not found</h2>

          <button type="button" onClick={onBack}>
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <button type="button" className="back-button" onClick={onBack}>
        ← Back
      </button>

      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-content">
        <p className="product-details-brand">{product.brand}</p>

        <h1>{product.name}</h1>

        <div className="product-details-price">
          ₹{product.price.toLocaleString("en-IN")}
        </div>

        <p className="product-details-original-price">
          ₹{product.originalPrice.toLocaleString("en-IN")}
        </p>

        <div className="product-details-info">
          <h2>Product Details</h2>

          <div className="detail-row">
            <span>Brand</span>
            <strong>{product.brand}</strong>
          </div>

          <div className="detail-row">
            <span>Rating</span>
            <strong>★ {product.rating}</strong>
          </div>

          <div className="detail-row">
            <span>EMI starts from</span>
            <strong>
              ₹{product.emiPlans[0].monthlyAmount.toLocaleString("en-IN")}
              /month
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
