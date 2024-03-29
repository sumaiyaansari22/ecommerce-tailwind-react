import React,{useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const {products} = useContext(ProductContext);
  
  const filteredProducts = products.filter((item)=>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })
  console.log(filteredProducts)
  return (
  <div>
    <Header/>
    <Sidebar/>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  max-w-sm  mx-auto gap-[30px]  md:max-w-none md:mx-0'>
          {filteredProducts.map(product =>{
          //  return <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>{product.title}</div>;
          return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default Home;
