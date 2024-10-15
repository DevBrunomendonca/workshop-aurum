import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import localFont from "next/font/local";
import Footer from "./_components/footer";
import BtnWtpp from "./_components/btn-wtpp";
import Head from "next/head"; // Importa o componente Head
import Image from "next/image";

const modaniRegular = localFont({
  src: "./fonts/MadaniArabicRegular.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Workshop Aurum",
  description: "Transforme sua vida com o Mercado Financeiro!",
  openGraph: {
    title: "Workshop Aurum",
    description: "Transforme sua vida com o Mercado Financeiro!",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-aurum.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1583661365920020');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            alt=""
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1583661365920020&ev=PageView&noscript=1"
          />
        </noscript>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </Head>
      <body className={`${modaniRegular.className}`}>
        <Header />
        <BtnWtpp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
