import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import {Link} from 'react-router-dom'


function Main() {

    useEffect(() => {
        Aos.init({ duration: 1200});
    }, []);



    return(
        <div className="main-content">

        <section className="main" data-aos="fade-up">
            <div className="container">
                <div className="main-inner">
                    
                    <h1>Keptirgen</h1>
                    <h5>since 2021</h5>
                    <p>Казахстанская компания<br></br> по производству сущенных продуктов.</p>
                    <Link className="about-link" to="/about-page">Подробнее</Link>
                    
                </div>
            </div>
        </section>

        <div className="suchofrukt" data-aos="fade-down">
            <div className="container">
                <div className="polza-inner" data-aos="fade-right">
                    
                    <h1>Чем полезна наша эко продукция?</h1>

                    <p>
                     
                     Если убрать все вредное: соль, сахар и прочие консерванты. 
                     Что же за это экопродукция?
                     Обыкновенные фрукты, ягоды, овощи. Все это приготовлено природой, осталось только оформить и подать как нужно Клиенту.
                     В последнее время довольно модное направление употребления продуктов это сушка. Обезвоженные фрукты, ягоды, овощи долго сохраняются,
                     сохраняя вкусовые и полезные свойства, более того некоторые в сушеном виде обретают яркий и насыщенный вкус.
                     И это известно издревле, традициям изготовление сухофруктов не одна тысяча лет: изюм, урюк, инжир. 
                    </p>

                    
                    
                </div>
            </div>
                
        </div>

        </div>
    )
}

export default Main;