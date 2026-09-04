import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onBack }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.id,
  );

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

  const currentVariant =
    product.variants?.find((variant) => variant.id === selectedVariant) ||
    product.variants?.[0];

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
          ₹{currentVariant.price.toLocaleString("en-IN")}
        </div>

        <p className="product-details-original-price">
          ₹{product.originalPrice.toLocaleString("en-IN")}
        </p>

        <div className="variant-section">
          <h2>Select Variant</h2>

          <div className="variant-options">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                className={`variant-button ${
                  selectedVariant === variant.id ? "variant-button-active" : ""
                }`}
                onClick={() => setSelectedVariant(variant.id)}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>

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
