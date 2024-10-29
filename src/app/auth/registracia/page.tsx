// /src/app/auth/registracia.tsx

"use client";

import { Button } from '@mui/material';

export default function Registracia() {
  // Tu môžeš pridať logiku registrácie
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary">
        Registrovať
      </Button>
    </div>
  );
}