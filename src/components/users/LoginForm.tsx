import React, { useState, FormEvent } from "react";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  errorMessage: string;
}

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  errorMessage: string;
  onLogout: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  errorMessage,
  onLogout,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    // Валидация на пустые поля
    if (!username || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    onSubmit(username, password);
  };

  return (
    <div style={{marginTop: 15}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};
export default LoginForm;
