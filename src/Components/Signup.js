import "./signup.css";
import facebook from "./image/facebook.png";
import google from "./image/Google.png";
import cancle from "./image/Cancle.svg";
import apple from "./image/Apple.png";

const Signup = () => {
  return (
    <div className="box">
      <div id="inline">
        <div id="cancle" className="inline">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 19L19 1"
              stroke="black"
              stroke-width="1.36157"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 19L1 1"
              stroke="black"
              stroke-width="1.36157"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <center>
          <div className="inline" id="signup">
            Signup for a new account
          </div>
        </center>
      </div>
      <br />
      <br />
      <hr id="line" />
      <br />
      <center>
        <div id="create">
          <b> Let's create a new account </b>
        </div>
      </center>
      <br />
      <div>
        <form action="Submit">
          <input
            type="email"
            name="email"
            id="form"
            placeholder="Email Address"
          />
        </form>
      </div>
      <br />
      <div>
        <center>
          <button id="button">Continue</button>
        </center>
      </div>
      <br />
      <br />
      <div className="lineContainer">
        <div className="line"></div>
        <span className="or">OR</span>
        <div className="line"></div>
      </div>
      <div className="login-container">
        <a href="facebook" className="facebook-btn">
          <img src={facebook} alt="Facebook Icon" className="icon" />
          Continue with Facebook
        </a>
      </div>
      <div className="login-container-google">
        <a href="google" className="google-btn">
          <img src={google} alt="Google Icon" className="gicon" />
          Continue with Google
        </a>
      </div>
      <div className="login-container-apple">
        <a href="apple" className="apple-btn">
          <img src={apple} alt="Apple Icon" className="apple-icon" />
          Continue with Apple
        </a>
      </div>
      <div>
        <center>
          <p>Have a Account</p>
        </center>
      </div>
      <div>
        <center>
          <a href="/login">Login</a>
        </center>
      </div>
    </div>
  );
};

export default Signup;
