import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lodge Marketplace Eppendorf",
  description: "Local marketplace for the Eppendorf community. Buy and sell quality products in your area.",
  keywords: ["marketplace", "eppendorf", "buy", "sell", "products", "local"],
  authors: [{ name: "Lodge Marketplace" }],
  creator: "Lodge Marketplace",
  publisher: "Lodge Marketplace",
  openGraph: {
    title: "Lodge Marketplace Eppendorf",
    description: "Local marketplace for the Eppendorf community",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <AuthProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
