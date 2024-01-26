import React, { useState } from "react";
import textArea from "../text_area/TextArea";
import Input from '../input/Input'

const Contact = () => {
    
    const [popUp,setPopUp] = useState(false)
    
    const handlerPopUp = () => {
        setPopUp(true)

        setTimeout(() => {
            setPopUp(false)
        },1000);
        
    }
    return(
        <section className="contact-us">
            <article>
                <h2>Contact us</h2>

                <form method="post" name="contactUs">
                    <Input 
                    type="text" 
                    placeholder={'Guest01'} 
                    name={'gest-name'} 
                    autoComplete={true} 
                    required={true} />

                    <Input 
                    type="email" 
                    placeholder={'Email'} 
                    name={'email'} 
                    autoComplete={true} 
                    required={true} />

                    <textArea
                    placeholder={'Feedback from guest'} 
                    maxLength={150} 
                    rows={10} 
                    name={'message-from-guest'} />
                    
                    <button onClick={handlerPopUp} type="submit" name="">Send</button>

                </form>
                {popUp && <aside style={{position:'absolute'}}>
                        <p>Thank you for contacting us! We will get back to you shorly</p>
                        </aside>
                }
            </article>
        </section>
    )
}

export default Contact;