import {Link} from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


function Footer(){
    useEffect(()=>{
        Aos.init({duration: 500});
    }, []);


    return(
        <div className="footer" data-aos="fade-up">
            <div className="container">
                <div className="footer-inner">
                    <h1>(c)Все права защищены.</h1>
                    <p>Если у вас возникли вопросы обратитесь к нам:</p>
                    <Link className="Footer_btn" to="/call">Связатся</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer