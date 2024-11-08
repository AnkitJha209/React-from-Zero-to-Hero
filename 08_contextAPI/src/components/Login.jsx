import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    setUser({input, pass})
    setInput('');
    setPass('')
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Enter Username"
        className="border-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="border-2 ml-1 mr-1"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
