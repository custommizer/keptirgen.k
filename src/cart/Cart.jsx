import { useContext, useEffect, useState } from "react"
import { UserContext } from "./User"
import { storecomponents } from '../catalogue/Storecomp'
import './cart.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import empty from '../cart/empty-cart.png'
import Aos from "aos";
import "aos/dist/aos.css"



function Cart({setKorz}){
    


    const[name,setName] = useState('')
    const[phone,setPhone] = useState('')
    const[errors,setErrors] = useState(false)
    

    let sum = 0
    let text = ``
    useEffect(()=>{
        Aos.init({duration: 250});
    }, []);


    const User = useContext(UserContext);

    const handleOrder = (e) =>{
        e.preventDefault()
        if (!User.user){setErrors('Корзина не должна быть пустой!')}
        else if (!User.user.korzina){setErrors('Корзина не должна быть пустой!')}
        else if (User.user.korzina.length < 1){setErrors('Корзина не должна быть пустой!')}
        else if (name.length < 3){setErrors('Имя обязательно должно быть заполненным')}
        else if (phone.length < 9){setErrors('Номер обязательно должно быть заполненным')}
        else if(errors === false){
        
        text+=`______общая сумма:${sum}\n\n _______    имя_покупателя:${name}\n\n ______  номер-покупателя:${phone}`
        const templateId = "template_lw5clu9"
        window.emailjs.send("service_hc4ucu5", templateId,{message_html:text, from_name:"eldar", reply_to:"sadstorystudios.85@gmail.com"}).then(res=>{console.log("email")}).catch(error=>{console.log(error)})
        .then(
            message => alert('Ваша заявка успешно принята ;)',
            window.location.reload(false)
            )
            
        );
      }


    }

    const handlekorzinaadd = (e,id) =>{
        e.preventDefault()

        if(
        User.user.korzina.filter(item=> item.id === id)[0]){
        let product = User.user.korzina.filter(item=> item.id === id)[0]
        product.count+=1
        User.setUser({...User.user, korzina: [...User.user.korzina.filter(item=>item.id!==id), product]});}

    }

    const handlekorzinaminus = (id) =>{
        
        if(
        User.user.korzina.filter(item=> item.id === id)[0]){
                
        let product = User.user.korzina.filter(item=> item.id === id)[0]
        product.count=product.count-1
        if(product.count < 1){
            console.log(product.count)
            User.setUser({...User.user, korzina: User.user.korzina.filter(item=>item.id!==id) });
        }else{
            User.setUser({...User.user, korzina: [...User.user.korzina.filter(item=>item.id!==id), product]});}}
        
            
    

    }


    const handleKorzinaDelete = (id) => {
        User.setUser({
            ...User.user,
            korzina: User.user.korzina.filter((el) => el.id !== id),
        });
    }
    return(
        <div className="korz_wrapper">
            <button className="cart_ghost" onClick={()=>setKorz(false)}></button>

        
        <div className="Korzina" data-aos="fade-left">
            
            <button className="Cart_close" onClick={()=>setKorz(false)}><AiOutlineCloseCircle/></button>
            <div className="container">

            <div className="order-inner">
            {User && User.user && User.user.korzina ? User.user.korzina.map(el =>{
                let product = storecomponents.filter(
                    (prod)=>String(prod.id) === String(el.id)
                    
                )[0]; product.count = el.count
                sum += product.money*product.count
                text+= `    имя товара:${product.title}\n\n__кол-во:${product.count}\n\n__________      `
                return(
                
               
                <div className="Korzina_card" key={"cart"+product.id}>
                    
                        <div className="Korzinka_items">
                          <h1>{product.title}</h1>
                          <img src={product.image} />
                          <p>{product.price} {product.money}</p>
                          <h3>{product.money} тенге</h3>
                          <h3>количество: {product.count} шт</h3>
                          <button className="Cart_sum" onClick ={(e)=> handlekorzinaadd(e,product.id)}>+</button>
                          <button className="Cart_sum" onClick ={()=> handlekorzinaminus(product.id)}>-</button>
                          <button className="Cart_sum" onClick={()=> handleKorzinaDelete(product.id)}>
                              Удалить
                          </button>
                        </div>

                        

                </div> 
                )
            } ) : ( <div className="pustoi">
                <h1 className="pusto">Ваша корзинка пуста!</h1>
                <img src={empty}/></div> )}

             </div>
             

        
            </div>

            <div className="summary">Общая сумма: {sum}</div>
                <form className="Foorm">
                 <input className="orderinput" type="text" placeholder="Ваше имя" onChange={(e)=>setName(e.target.value)}></input>

                 <input className="orderinput" type="text" placeholder="Ваш номер" onChange={(e)=>setPhone(e.target.value)}></input>
                 <button className="orderbtn" onClick={(e)=>handleOrder(e)}>Оформить заказ</button>
               
                </form>
                    {errors?(<div className="errors">{errors}</div>):null}
                

            

           
        </div>

        </div>

    );
    

}

export default Cart