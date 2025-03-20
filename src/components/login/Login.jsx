import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Input from "../input/Input";
import Label from "../label/Label";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";


const Login = () =>{
    
    const [isRegisterClicked,setIsRegister] = useState(false)
    const handlerButton = (event) => {
        // event.preventDefault()
       
    }

    const handlerLogin = () =>{
        setIsRegister((prevValue) => {
            return(!prevValue)
        })
    }
    return(
        <section className="login-section">
            <div>
                <article>
                    <button onClick={handlerLogin} style={isRegisterClicked ? null : {background:'#D6EAF8'} } >Login</button>
                    <button onClick={handlerLogin}  style={isRegisterClicked ? {background:'#D6EAF8'} :null   }>Register</button>
                </article>
                <div>
                    <h4>Sign in with:</h4>
                    <Link to={'https://www.facebook.com/'} target="_blank"><FacebookIcon /></Link>
                    
                    <Link to={'https://twitter.com/'} target="_blank"><TwitterIcon /></Link>
                    
                    <Link to={'https://www.google.com/'} target="_blank"><GoogleIcon /></Link>
                    
                    <Link to={'https://github.com/'} target="_blank"><GitHubIcon /></Link>

                    <h4>or:</h4>
                </div>
                <form method="post">
                     
                    <Input type={'text'} name={'email'} placeholder={'Email addres'} autoComplete={'off'} required={true} />
                    
                    {isRegisterClicked && <Input type={'text'} name={'email'} placeholder={'Confirm Email'} autoComplete={'off'} required={true} />}
                    
                    <Input type={'password'} name={'password'} placeholder={'Password'} autoComplete={'off'} required={true} />
                    
                    {isRegisterClicked && <Input type={'password'} name={'confirm-password'} placeholder={'Confirm password'} autoComplete={'off'} required={true} />}

                    <div>
                        <article>
                            
                            <Input type={"checkbox"} id={'remember'} />
                            <Label text={'Remember me'} id={'remenber'} />

                        </article>

                        
                        <Link to={'/forgotpassword'}>Forgot password?</Link>
                        
                    </div>
                    <button onClick={handlerButton} type="submit" placeholder="Sing in">Sign In</button>
                </form>
                <p>Not a member? <Link onClick={handlerLogin} to={'/login'}>Register</Link></p>
            </div>
        </section>
    )
}

export default Login;