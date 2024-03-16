import React from 'react'
import "./Contact.css"
import Footer from "../Footer/Footer";
import { Registr } from '../../Pages/regitr/Registr';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_img'>
                <div className='contact_top'>
               <div className='contact_img1'> <img src="./images/logowhite.png" alt="Massege"/></div>
             <div className='contact_img2'> 
             <img src="./images/contactPict.png" alt=""/>
             </div>
                
                </div>
                <div className='contact_bot'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.97391662316!2d-105.0199207068628!3d39.764222406684596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2z0JTQtdC90LLQtdGALCDQmtC-0LvQvtGA0LDQtNC-LCDQodCo0JA!5e0!3m2!1sru!2s!4v1709636330164!5m2!1sru!2s"></iframe>
                </div>
            </div>
           <Registr/>
        <Footer />
        </div>
    )
}

export default Contact