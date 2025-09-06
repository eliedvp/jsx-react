import React from "react";
import product from "../data/product";

function Image() {
  return <img src={product.image} alt={product.name} width="250" />;
}

export default Image;
