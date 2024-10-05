import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import localFont from "next/font/local"
import Footer from "./_components/footer";
import BtnWtpp from "./_components/btn-wtpp";

const modaniRegular = localFont({
  src: "./fonts/MadaniArabicRegular.ttf",
  weight: "400"
})


export const metadata: Metadata = {
  title: "Workshop Aurum",
  description:
    "Transforme sua vida com o Mercado Financeiro!",
  openGraph: {
    title: "Workshop Aurum",
    description:
      "Transforme sua vida com o Mercado Financeiro!",
    url: "https://aurumcapital.trade/lander",
    type: "website",
    images: [
      {
        url: "/banner-main.png",
        width: 1200,
        height: 630,
        alt: "Banner workshop",
      },
    ],
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${modaniRegular.className}`}>
        <Header />
        <BtnWtpp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
