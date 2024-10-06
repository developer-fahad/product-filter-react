import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md m-2 max-w-xs">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-gray-500">{product.category}</p>
    </div>
  );
};

export default ProductCard;
