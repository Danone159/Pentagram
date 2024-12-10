// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar.1";
import AuthProvider from "../components/AuthProvider";
import { ThemeSwitcherProvider } from "@/components/ThemeSwitcher"; // Import ThemeSwitcherProvider

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Vyrobil Donár Dopeč po Zochovácky, Bratislava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          {/* ThemeSwitcherProvider obklopuje všetko ako klientský komponent */}
          <ThemeSwitcherProvider>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            <Navbar />
          </ThemeSwitcherProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
