// src/app/auth/registracia.tsx

import React, { useState } from 'react';

const Registracia = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tu by si mal pridať logiku na registráciu
    // Môžeš volať API alebo použiť next-auth
    console.log("Registrujem:", { email, password });
  };

  return (
    <div>
      <h1>Registrácia</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Heslo:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrovať</button>
      </form>
    </div>
  );
};

export default Registracia;
