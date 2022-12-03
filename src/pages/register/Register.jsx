import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MySocial</h3>
                <span className="loginDesc">connect with friends and the world around you on Mysocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="UserName" type="email" className="loginInput" />
                  <input placeholder="Email" type="email" className="loginInput" />
                  <input placeholder="Password" type="password" className="loginInput" />
                  <input placeholder="Password Agin" type="password" className="loginInput" />
                  <button className="loginButton" >Sign Up</button>
                  <span className="loginForgot">Forgot password?</span>
                  <button className="loginRegisterButton" >Log in to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
