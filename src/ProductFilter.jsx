import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Extract unique categories from products
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle price range change
  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setPriceRange(value);
  };

  // Filtered products based on selected category and price range
  const filteredProducts = products.filter((product) => {
    const isInCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const isInPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return isInCategory && isInPriceRange;
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Filter Section */}
      <div className="flex mb-4">
        <select
          onChange={handleCategoryChange}
          className="border rounded p-2 mr-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        <select
          onChange={handlePriceRangeChange}
          className="border rounded p-2"
        >
          <option value="0,500">All Prices</option>
          <option value="0,100">$0 - $100</option>
          <option value="100,200">$100 - $200</option>
          <option value="200,500">$200 - $500</option>
        </select>
      </div>

      {/* Display filtered products */}
      <div className="flex flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
