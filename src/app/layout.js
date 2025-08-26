import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "Api sobre a nossa cafeteria ☕",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto de Front para se conectar com a API da cafeteria",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
