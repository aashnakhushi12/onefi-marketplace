import { useState } from "react";
import "./Shop.css";
import PromoBanner from "../../components/PromoBanner";
import ShopTabs from "../../components/ShopTabs";
import SearchBar from "../../components/SearchBar";
import Marketplace from "../Marketplace";

function Shop() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="shop-page">
      <main className="shop-content">
        <h1 className="shop-title">Shop</h1>

        <PromoBanner />

        <ShopTabs />

        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search for products"
        />

        <Marketplace />
      </main>
    </div>
  );
}

export default Shop;
