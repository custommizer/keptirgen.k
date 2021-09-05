import {Link} from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


function Footer(){
   


    return(
        <div className="footer" >
            <div className="container">
                <div className="footer-inner">
                    
                    <p>Если у вас возникли вопросы обратитесь к нам:</p>
                    <Link className="Footer_btn" to="/call">Связаться</Link>
                    
                    <h1>Keptirgen.2021.(c)все права защищены.</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer