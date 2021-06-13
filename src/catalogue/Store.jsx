import React, { useContext, useEffect } from 'react'
import './store.css'
import storecomponents from './Storecomp';
import Storecomp from './Storecomp'
import {UserContext} from '../cart/User'
import Aos from "aos";
import "aos/dist/aos.css"; 



function Store() {
    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);

    const User = useContext(UserContext);

    const handleKorzina = (id) =>{
        if (User.user){
           
           if (User.user.korzina){
               if(
               User.user.korzina.filter(item=> item.id === id)[0]){
                let product = User.user.korzina.filter(item=> item.id === id)[0]
                product.count+=1
                User.setUser({...User.user, korzina: [...User.user.korzina.filter(item=>item.id!==id), product]});
                
               }else{
            User.setUser({...User.user, korzina: [...User.user.korzina, {id:id,count:1}]});}
           }else{
            User.setUser({...User.user, korzina: [{id:id,count:1}]});
           }
        }else{ User.setUser({ korzina: [{id:id,count:1}]});}
        
        
    };



    return (
        <section className="store">
            <div className="container">
                <div className="store-inner">
                    <div className="store-list">
                        
                        {
                            storecomponents.map((item)=>{
                                return(
                                    
                                    <div className="store_item" key={item.id} data-aos="fade-up">
                                        <img src={item.image} />
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <h4>{item.price}</h4>
                                        <h3>{item.money}</h3>
                                        <button onClick={(e)=> handleKorzina(item.id)}>в Корзинку</button>
                                    </div>
                                    
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Store;