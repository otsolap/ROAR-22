import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../util/apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { user, isFetching, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({
            email: emailRef.current.value,
            password: passwordRef.current.value
        },
            dispatch)
    }

    console.log(user)

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Roar</h3>
                    <span className="loginDesc">Social Media is a disease. Meet the cure.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input
                            ref={emailRef}
                            required placeholder="Email"
                            type="email"
                            className="loginInput" />
                        <input
                            minLength={6}
                            required
                            ref={passwordRef}
                            placeholder="Password"
                            type="password"
                            className="loginInput" />
                        <button type="submit" className="loginButton" disabled={isFetching}>
                            {isFetching ? <CircularProgress size="20px" color=" secondary" /> : 'Login'}
                        </button>
                        <span className="ForgotPassword">Forgot Password?</span>
                        <button disabled={isFetching} className="loginRegister">
                            <Link className="registerLink" to="/register">
                                Create Account
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
