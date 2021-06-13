import {Link} from 'react-router-dom'
import './menu.css'
import Menubar from './Menubar'
import React, {useState} from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {FaCartArrowDown} from 'react-icons/fa'
import Cart from '../cart/Cart'






function Header() {
    
    const [show,setShow]=useState(false)
    const [korz,setKorz]=useState(false)
    
   
    return(
        

        <div className="header">
            <div className="header-inner">
            {
                show?< Menubar setShow={setShow}/>:null
            }
            
            <button  className="Header_buttons" onClick={()=>setShow(true)}><AiOutlineMenuUnfold/></button>
            <button className="Header_buttons" onClick={()=>setKorz(true)}><FaCartArrowDown/></button>
            
            {
                korz?< Cart setKorz={setKorz}/>:null
            }

            </div>


           
        </div>  
        
       
            
        
        
    )
}

export default Header;