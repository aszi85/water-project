import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Água Maputo",
  description: "Mapa de abastecimento de água em Maputo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
    >
      <body> 
        <nav style={{
          background: "#0D1B2A",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>    
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
          <div style={{
            width: "6px",
            height: "28px",
            background: "#2E9CCA",
          }}/>
          <span style={{
            color: "white",
            fontWeight: 700,
            fontSize: "15px",
          }}>
            Água Maputo
          </span>
          </div>
          <div style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}>
            <Link href="/" style={{ color: "#8A9BB0", fontSize: "13px" }}>Início</Link>
            <Link href="/map" style={{ color: "#8A9BB0", fontSize: "13px" }}>Mapa</Link>
            <Link href="/report" style={{ color: "#8A9BB0", fontSize: "13px" }}>Reportar</Link>
            <Link href="/about" style={{ color: "#8A9BB0", fontSize: "13px" }}>Sobre</Link>
            <Link href="/map" style={{
              background: "#2E9CCA",
              color: "white",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: 500,
            }}>
              Ver mapa
            </Link>
          </div>

        </nav>  
        {children}
        <footer style={{
          background: "#0D1B2A",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1px",
        }}>
          <span style={{ fontSize: "11px", color: "#4A5E72" }}>
            © 2025 Água Maputo · Dados actualizados diariamente
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/about" style={{ fontSize: "11px", color: "#4A5E72" }}>Fontes de dados</Link>
            <Link href="/about" style={{ fontSize: "11px", color: "#4A5E72" }}>Contacto</Link>
            <Link href="/about" style={{ fontSize: "11px", color: "#4A5E72" }}>Privacidade</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
