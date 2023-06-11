import React, { useState, FormEvent } from 'react';

interface RegistrationFormProps {
  onSubmit: (username: string, password: string) => void;
  errorMessage: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  errorMessage,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (event: FormEvent) => {
    event.preventDefault();

    // Валидация на пустые поля
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit(username, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Name"
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
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm