import './aboutus.css'
import ceo from './ceo.jpeg'
import klogo from './klogo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Aboutus() {

    useEffect(() => {
        Aos.init({ duration: 900});
    }, []);


    return(
        <section className="about">
            <div className="about-inner">
                <div className="container">
                    <div className="ceo-item" data-aos="fade-down">
                        <h1>Основатель компании и Ген.директор: Айша Сеит</h1>
                        <img src={ceo} />
                    </div>

                    <div className="aboutkeptirgen" data-aos="fade-up">
                        <img src={klogo} />
                        <h1>О нашей компании:</h1>
                        <h2>Компания Keptirgen основана в 2021 году  в июне. Основная деятельность - это производство здоровой продукции: пастилы, эко снеков из овощей и фруктов, чипсов из сушеных овощей и фруктов, гранолы.
                            Все изготавливается на высококачественном оборудывании дегитраторе- сушилке Ezidri.
                            Миссия компании - это нести здоровье в мир, через быстрое питание и здоровый перекус .
                            Продукция рекомендуется детям и взрослым от 1 года до 100 лет. 
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Aboutus