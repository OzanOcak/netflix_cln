import "./login.css";
function Login() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="loginScreen_logo"
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>

      <div className="loginScreen_body">
        <>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="loginScreen_getStarted">Get Started</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
