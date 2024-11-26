// /src/app/auth/prihlasenie.tsx
"use client";

import { signIn } from "next-auth/react";
import { Button } from '@mui/material';

export default function registracia() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary" onClick={() => signIn("google")}>
        Registrovať sa s Google
      </Button>
    </div>
  );
}