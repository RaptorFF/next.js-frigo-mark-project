import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FrigoMark - Profesionalne usluge klimatizacije i grejanja",
  description:
    "Professional HVAC installation, repair, and maintenance services. 24/7 emergency support available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
