import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const [errors, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch("https://7y6v9n-8080.csb.app/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      if (response.ok) {
        onLogin && onLogin({ username: creds.username });
        navigate("/stats");
      } else setError("Invalid username or password!");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed!");
    }
  };
  return (
    <div style={{ padding: 20 }}>
      {" "}
      <br />
      <span>Username:</span>
      <br />
      <input
        type="text"
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      />
      <br />
      <span>Password:</span>
      <br />
      <input
        type="password"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{errors}</p>
    </div>
  );
}
