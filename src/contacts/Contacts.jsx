import '../contacts/contacts.css'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function Contacts(){

    useEffect(()=>{
        Aos.init({duration: 1200})

    }, []);


    return(
        <section className="contact" data-aos="fade-up" data-aos-duration="800">
            <div className="container">
                <div className="contacts-inner">
                    <h1>Контакты нашей компании</h1>
                    <div className="contacts_list">
                        
                        <div className="contacts-item" data-aos="fade-right">
                            <h4>
                               <BiPhoneCall/> Номер телефона:<br></br>+77017114090 - Айша <br></br>
                               +77771450906 - Менеджер Елдар
                            </h4>
                        </div>
                        <div className="contacts-item" data-aos="fade-down">
                            <h4>
                               <AiOutlineMail/> Почта:<br></br> Keptirgen.kz@gmail.com
                               <br></br>По вопросам о сотрудничестве вы можете обратится на эту почту: aisha-seit@gmail.com
                            </h4>
                        </div>
                        <div className="contacts-item" data-aos="fade-left">
                            <h4><FiInstagram/> Инстаграмм:</h4>
                            <a href="https://www.instagram.com/aishadan_s/">@aishadan_s</a>
                        </div>

                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac00bfcd8190c9e3ff5e93772384195d3291564b2b2c2dc0250d9f3f520c17967&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                </div>

            </div>
        </section>
    )
}

export default Contacts