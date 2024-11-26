"use client";

import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const router = useRouter();
  const { data: session } = useSession(); // Stav užívateľa

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue); // Navigácia
  };

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation value={value} onChange={handleNavigation} showLabels>
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Profily"
          value="/profil"
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Príspevky"
          value="/prispevok"
          icon={<AddCircleIcon />}
        />
        {/* Zobraziť tlačidlo Registrácia len pre neprihlásených užívateľov */}
        {!session && (
          <BottomNavigationAction
            label="Registrácia"
            value="/auth/registracia"
            icon={<PersonAddIcon />}
          />
        )}
        {session ? (
          <BottomNavigationAction
            label="Odhlásiť"
            onClick={() => signOut()}
            icon={<LogoutIcon />}
          />
        ) : (
          <BottomNavigationAction
            label="Prihlásenie"
            value="/auth/prihlasenie"
            icon={<LoginIcon />}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}
