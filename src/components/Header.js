import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from "react-icons/bs"
import { CartContext } from '../contexts/CartContext';
import { Link, useSearchParams } from 'react-router-dom';
import Logo from "../img/logo.svg";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useFirebase } from '../contexts/FormContext';


const Header = () => {

  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
    })
  })

  const [user, setUser] = useState(null);
  const {firebaseAuth} = useFirebase();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    })
  })

  return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container flex mx-auto items-center justify-between h-full'>
      <Link to={'/'}>
        <div className='flex'>
          <img className='w-[40px]' src={Logo} />
          {!user ? <><Link to={'/signup'} 
           className='bg-black text-white ml-5 w-36 m-1 p-2 rounded-md text-xl text-center hover:bg-red-500'>
          Sign Up</Link>
          <Link to={'/login'}
          className='bg-black text-white m-1 w-36 p-2 rounded-md text-xl text-center hover:bg-red-500 '>Login</Link></> : <Link to={'/'}
          onClick={(e) => signOut(firebaseAuth)} className='bg-black text-white ml-5 m-1 w-36 p-2 rounded-md text-xl text-center hover:bg-red-500 '>Logout</Link>}
        </div>
      </Link>
      <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] 
      h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
  </header>;


};

export default Header;
