import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'


import {FcHome} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {FcContacts} from 'react-icons/fc'
import {MdLocalGroceryStore} from 'react-icons/md'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {FcRules} from 'react-icons/fc'
import Aos from "aos";
import "aos/dist/aos.css";




function Menubar({setShow}){
    useEffect(() => {
        Aos.init({ duration: 250});
    }, []);
    
    
    return(
        


        
                <div className="menu" data-aos="fade-right" >
                   <div className="menu-inner">
                        <div className="menu-list">
                           <button onClick={()=>setShow(false)}><IoIosCloseCircleOutline/></button>
                  
                           <Link to = "/main" className="links_link"> <FcHome /> Главная</Link>
                           <Link to="/about-page" className="links_link"><FcAbout /> О нас  </Link>
                           <Link to = "/store" className="links_link"><MdLocalGroceryStore/> Магазин</Link>
                  
                           <Link to="/call" className="links_link"><FcContacts/> Контакты</Link>
                           <Link to="/rule" className="links_link"><FcRules/> Условия заказа</Link>
                  
                  
                    

                        </div>
                    </div>
                </div>
         
    )
}

export default Menubar