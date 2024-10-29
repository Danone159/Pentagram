// /src/app/auth/odhlasenie.tsx
"use client";

import { signOut } from "next-auth/react";
import { Button } from '@mui/material';

export default function Odhlasenie() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        Odhlásiť sa
      </Button>
    </div>
  );
}
