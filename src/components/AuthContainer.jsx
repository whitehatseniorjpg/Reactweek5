import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const AuthContainer = () => {

  //  Lifted state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>React Authentication Project</h1>

      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : showSignUp ? (
        <SignUp
          setRegisteredUser={setRegisteredUser}
          setShowSignUp={setShowSignUp}
        />
      ) : (
        <SignIn
          registeredUser={registeredUser}
          setIsAuthenticated={setIsAuthenticated}
          setShowSignUp={setShowSignUp}
        />
      )}

    </div>
  );
};

export default AuthContainer;

