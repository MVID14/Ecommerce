import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   //fetch api
   useEffect(() => {
      const fetchProducts = async () => {
         const respone = await fetch('https://fakestoreapi.com/products');
         const data = await respone.json();
         setProducts(data);
      };
      fetchProducts();
   }, []);
   return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
