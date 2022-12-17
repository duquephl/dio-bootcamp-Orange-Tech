import { useState } from "react";

import jpIMG from "./assets/hello.png";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Welcome </span>

            <span className="login-form-title">
              <img src={jpIMG} alt="Blue 'Hello' ballon" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn"><strong>Login</strong></button>
            </div>

            <div className="text-center">
              <span className="txt1">Don't have an account?</span>
              <a className="txt2" href="#">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;