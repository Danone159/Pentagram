"use client";

import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  const { data: session } = useSession(); // Fetch the session data

  // Ensure that session and user data are defined before accessing
  const userName = session?.user?.name || "Používateľ";
  const userEmail = session?.user?.email || "Neznámy email";

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
            Ahoj {userName}, ste prihlásený!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Váš email: {userEmail}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Vitajte na stránke!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Prosím, prihláste sa, aby ste mohli pokračovať.
          </Typography>  </>
      )}
    </Box>
  );
}
