import React, { useEffect, useState } from "react";

// inline interface from typescript
const ProductList = ({ category }: { category: string }) => {
  // string tells what kinds of information is acceotable to put in new array
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    // set product to new array
    setProducts(["Clothing", "Household"]);
    // pass array of dependencies - empty array means effect not dependant on values
    // category allows user selection to be outputted in console
  }, [category]);
  return <div>Product List234</div>;
};

export default ProductList;
