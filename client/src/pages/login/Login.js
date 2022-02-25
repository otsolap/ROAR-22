import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Roar</h3>
                    <span className="loginDesc">Social Media is a disease. Meet the cure.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="ForgotPassword">Forgot Password?</span>
                        <button className="loginRegister">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
