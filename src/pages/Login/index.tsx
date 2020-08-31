import React, {ChangeEvent, useState, FormEvent} from 'react'
import {useHistory} from 'react-router-dom'
import {FaCheckCircle, FaExclamationCircle} from 'react-icons/fa'

import './styles.css'

import logo from '../../assets/img/logo-12.svg'

const Login = () =>{
    const history = useHistory()
    const [formData, setFormData] = useState({email: '', password: ''})
    const [validForms, setValidForms] = useState({email: '', password:''})
    const [errorMessages, setErrorMessages] = useState({email: '', password:''})
    function isEmail(email: string) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    function checkInput(input: string){
        if(input === 'email'){
            if(formData.email===''){
                setValidForms({...validForms, email:'false'})
                setErrorMessages({...errorMessages, email: 'E-mail cannot be blank'})
            }else if(isEmail(formData.email)){
                setValidForms({...validForms, email:'true'})
            }else{
                setValidForms({...validForms, email:'false'})
                setErrorMessages({...errorMessages, email: 'Invalid E-mail'})
            }
            //alert(formData.email)
        }else if(input === 'password'){
            if(formData.password===''){
                setValidForms({...validForms, password:'false'})
                setErrorMessages({...errorMessages, password: 'Password cannot be blank'})
            }else{
                setValidForms({...validForms, password:'true'})
            }
        }
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setFormData({ ...formData, [name]: value })
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        history.push('/genres')
    }
    return(
        <div className="page-login">
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logotipo"/>
                </div>
            </header>
            <main>
                <div className="form-container">
                    <h1 className="title">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={`field-container ${validForms.email===''?'':validForms.email==='true'?'valid':'invalid'}`}>
                            <div>
                                <input type="text" name="email" required autoComplete="off" onBlur={()=>checkInput('email')} onChange={handleInputChange} />
                                <label htmlFor="email" className="label-name">
                                    <span className="content-name">E-mail</span>
                                </label>
                                <FaExclamationCircle color="#e74c3c" size={16} className="exclamation" />
                                <FaCheckCircle color="#2ecc71" size={16} className="check" />
                            </div>
                            <small>{errorMessages.email}</small>
                        </div>
                        <div className={`field-container ${validForms.password===''?'':validForms.password==='true'?'valid':'invalid'}`}>
                            <div>
                                <input type="password" name="password" required onBlur={()=>checkInput('password')} onChange={handleInputChange} />
                                <label htmlFor="password" className="label-name">
                                    <span className="content-name">Password</span>
                                </label>

                                <FaExclamationCircle color="#e74c3c" size={16} className="exclamation" />
                                <FaCheckCircle color="#2ecc71" size={16} className="check"/>
                            </div>
                            <small>{errorMessages.password}</small>
                        </div>
                        <div className="remember-container">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <button className="sign-button">Sign in</button>
                    </form>
                </div>
                <div className="signup-container">
                    <p>Doesn't have an account?</p>
                    <button className="signup-button">Sign up now!</button>
                </div>
            </main>
        </div>
    )
}

export default Login