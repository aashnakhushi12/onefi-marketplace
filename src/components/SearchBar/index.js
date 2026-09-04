import "./SearchBar.css";

function SearchBar({ value, onChange, placeholder = "Search products" }) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
    </div>
  );
}

export default SearchBar;
