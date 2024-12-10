// src/app/auth/prihlasenie/page.tsx

"use client";

import CustomButton from "@/components/CustomButton";
import { signIn } from "next-auth/react";

export default function registracia() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Registrácia</h1>

      {/* Tlačidlo na prihlásenie cez Google */}
      <CustomButton
        onClick={() => signIn("google")}
        backgroundColor="black"
        borderColor="red"
        hoverBackgroundColor="gray"
        hoverBorderColor="darkred"
      >
        Prihlásiť sa cez Google
      </CustomButton>
    </div>
  );
}
