import "./Shop.css";
import PromoBanner from "../../components/PromoBanner";

function Shop() {
  return (
    <div className="shop-page">
      <main className="shop-content">
        <h1 className="shop-title">Shop</h1>

        <PromoBanner />
      </main>
    </div>
  );
}

export default Shop;
