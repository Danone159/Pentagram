"use client";

import { useSession } from "next-auth/react";
import { Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  const { data: session } = useSession(); // Fetch the session data

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {session ? (
        <>
          <Typography variant="h4" gutterBottom>
            Ahoj {session.user?.name}, ste prihlásený!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Váš email: {session.user?.email}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Vitajte na stránke!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Prosím, prihláste sa, aby ste mohli pokračovať.
          </Typography>

        </>
      )}
    </Box>
  );
}
