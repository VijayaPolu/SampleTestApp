"use client"
import React, { useState,Fragment, useEffect } from 'react'
import  styles from './Menu.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Menu = () => {
  const [isMobileMenu,setIsMobileMenu]=useState(document.body.clientWidth>700?false:true);
  const [left,setLeft]=useState(-150)
  const [menuItem,setMenuItem]=useState("")
  const router = useRouter()
  console.log(1,router)
//   const location=useLocation();
//   useEffect(()=>{
//      setMenuItem(location.pathname.slice(1) || 'home')
//   },[])

  /**
   * To Listen window resizing
   */
  const fnResize=()=>{
    if(document.body.clientWidth<700){
      setIsMobileMenu(true)
    }else{
      setIsMobileMenu(false);
    }

  }
  window.addEventListener("resize",fnResize)

  const handleMobileMenuBtnClik=()=>{
    setLeft(left == 0 ?-150 : 0)
  }
  const handleMenuItemClick=(eve,item)=>{
      eve.stopPropagation();
      setMenuItem(item)
      setLeft(-150)
  }

  return <Fragment className="mb-5">
    {isMobileMenu && <button onClick={handleMobileMenuBtnClik}  className={styles.mobileMenuBtn}>
      <span></span>
      <span></span>
      <span></span>
    </button>
   }
  
    <ul  style={{left}} className={isMobileMenu ? styles.mobileMenu: styles.menu}>
      <li><Link 
      onClick={(eve)=>{
        handleMenuItemClick(eve,"home")
      }} 
      className={menuItem==='home' ? styles.menuActive:''} 
      href="/home">
        Home
      </Link>
      </li>
      <li><Link className={menuItem==='about' ? styles.menuActive:''} onClick={(eve)=>handleMenuItemClick(eve,"about")} href="/about">About</Link></li>
      <li><Link className={menuItem==='contact' ? styles.menuActive :''} onClick={(eve)=>handleMenuItemClick(eve,"contact")} href="/contact">Contact</Link></li>
    </ul>
    
  </Fragment>
}

export default Menu




