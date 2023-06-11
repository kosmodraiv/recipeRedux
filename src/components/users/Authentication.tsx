import React, { useEffect, useState } from "react";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const Authentication = () => {
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("loggedInUsername");
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
    }
  }, []);

  const handleRegistration = (username: string, password: string) => {
    // Проверка на существующий аккаунт
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setRegistrationErrorMessage(
        "Account with this username already exists"
      );
      return;
    }

    // Регистрация нового пользователя
    localStorage.setItem(username, password);
    setRegistrationErrorMessage("");
    setLoggedInUsername(username);
    localStorage.setItem("loggedInUsername", username);
    alert("Регистрация успешна!");
  };

  const handleLogin = (username: string, password: string) => {
    // Проверка на существующий аккаунт
    const storedPassword = localStorage.getItem(username);
    if (storedPassword !== password) {
      setLoginErrorMessage("Incorrect user name or password");
      return;
    }

    setLoginErrorMessage("");
    setLoggedInUsername(username);
    localStorage.setItem("loggedInUsername", username);
  };

  const handleLogout = () => {
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUsername");
  };

  return (
    <div style={{ padding: 20 }}>
      {loggedInUsername ? (
        <div>
          <h2>Welcome, {loggedInUsername}!</h2>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      ) : (
        <div>
          <RegistrationForm
            onSubmit={handleRegistration}
            errorMessage={registrationErrorMessage}
          />
          <LoginForm
            onSubmit={handleLogin}
            errorMessage={loginErrorMessage}
            onLogout={handleLogout}
          />
        </div>
      )}
    </div>
  );
};


export default Authentication