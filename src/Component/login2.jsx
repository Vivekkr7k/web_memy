import React ,{useState} from "react";
import '../Styles/Login.css'
import LoginImg from '../assets/log.svg'
import RegisterImg from '../assets/register.svg'

const Login = () => { 

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    }

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    }
  return (
    <div className=" w-full container">
       <div className={`contianer  ${isSignUpMode ? "sign-up-mode" : "sign-in-mode"}`}>
        <div id="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p className="social-text text-white">Sign In As </p>
              <div className="flex gap-3 py-3 ">
                <button className="bg-black text-white px-4 py-2 rounded-full hover:text-black hover:bg-white">Individual</button>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:text-black hover:bg-white">Business</button>
               
              </div>
              
              <input type="submit" value="Login" className="btn solid" />
              {/* <p className="social-text">Or Sign in with social platform</p> */}
              {/* <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>
           
           
            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p className="social-text text-white">Register As </p>
              <div className="flex gap-3 py-3 ">
                <button className="bg-black text-white px-4 py-2 rounded-full hover:text-black hover:bg-white">Individual</button>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:text-black hover:bg-white">Business</button>
               
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />
             
              {/* <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>
          </div>
        </div>
        <div id="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime maiores odit ipsa ipsam velit atque molestias nostrum sapiente? Quae, excepturi?</p>
                    <button onClick={handleSignUpClick} className="btn transparent" id="sign-up-btn">Register</button>
                </div>
                <img src={RegisterImg} className="image" alt="" />
            </div>
           
           
            <div className="panel right-panel">
                <div className="content">
                    <h3>One of us</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime maiores odit ipsa ipsam velit atque molestias nostrum sapiente? Quae, excepturi?</p>
                    <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">Sign in</button>
                </div>
                <img src={LoginImg} className="image" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
