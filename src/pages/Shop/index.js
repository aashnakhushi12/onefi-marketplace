import { useState } from "react";
import "./Shop.css";
import PromoBanner from "../../components/PromoBanner";
import ShopTabs from "../../components/ShopTabs";
import SearchBar from "../../components/SearchBar";
import Marketplace from "../Marketplace";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <div className="shop-page">
      <main className="shop-content">
        <h1 className="shop-title">Shop</h1>

        <PromoBanner />

        <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search for products"
        />

        {activeTab === "marketplace" && (
          <Marketplace searchValue={searchValue} />
        )}
      </main>
    </div>
  );
}

export default Shop;
