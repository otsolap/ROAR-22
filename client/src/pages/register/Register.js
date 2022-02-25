import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Roar</h3>
                    <span className="loginDesc">Social Media is a disease. Meet the cure.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="Username" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <input type="text" placeholder="Password again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegister">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
