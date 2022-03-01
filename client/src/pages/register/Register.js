import axios from 'axios';
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

export default function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordAgainRef.current.value !== passwordRef.current.value) {
            passwordRef.current.setCustomValidity('Passwords do not match')
        } else {
            const user = {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            try {
                console.log(user)
                await axios.post('/auth/register', user)
                navigate('login')
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Roar</h3>
                    <span className="loginDesc">Social Media is a disease. Meet the cure.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input type="text" ref={usernameRef} required placeholder="Username" className="loginInput" />
                        <input type="email" ref={emailRef} required placeholder="Email" className="loginInput" />
                        <input type="password" ref={passwordRef} required minLength={6} placeholder="Password" className="loginInput" />
                        <input type="password" ref={passwordAgainRef} required minLength={6} placeholder="Password again" className="loginInput" />
                        <button type="submit" className="loginRegister">Create account</button>
                    </form>
                    <button className="loginButton">
                        <Link className="loginLink" to="/login">
                            Log into account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
