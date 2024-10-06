import React, { useState } from "react";

const products = [
  { id: 1, name: "Product A", category: "electronics", price: 100 },
  { id: 2, name: "Product B", category: "clothing", price: 50 },
  { id: 3, name: "Product C", category: "clothing", price: 70 },
  { id: 4, name: "Product D", category: "electronics", price: 200 },
];

const ProductFilter = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    const [min, max] = event.target.value.split(",").map(Number);
    setPriceRange([min, max]);
  };

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const isCategoryMatch =
        category === "all" || product.category === category;
      const isPriceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return isCategoryMatch && isPriceMatch;
    });
    setFilteredProducts(filtered);
  };

  React.useEffect(() => {
    filterProducts();
  }, [category, priceRange]);

  return (
    <div>
      <h1>Product List</h1>

      {/* Category Filter */}
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      {/* Price Filter */}
      <select onChange={handlePriceChange}>
        <option value="0,150">Below $150</option>
        <option value="150,500">Above $150</option>
      </select>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
