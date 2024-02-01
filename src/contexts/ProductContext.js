import React,{createContext,useState,useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products state
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
      console.log(data)
    }
    fetchProducts();
  },[]);

  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
