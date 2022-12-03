import "./login.css"

export default function login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MySocial</h3>
                <span className="loginDesc">connect with friends and the world around you on Mysocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="email" type="email" className="loginInput" />
                  <input placeholder="password" type="password" className="loginInput" />
                  <button className="loginButton" >Log in</button>
                  <span className="loginForgot">Forgot password?</span>
                  <button className="loginRegisterButton" >Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
