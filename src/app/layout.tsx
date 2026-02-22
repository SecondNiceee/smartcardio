import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google"
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";
import "../styles/_index.scss"
import StartApp from "@/features/Home/StartApp";

import TelegramProvider from "@/shared/providers/TelegramProvider/TelegramProvider";
import TelegramPopup from "@/features/Telegram/TelegramPopup";
import ReduxProvider from "@/shared/providers/ReduxProvider/ReduxProvider";
import { AlertProvider } from "@/shared/providers/AlertProvider/AlertProvider";
 

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });
const yandexMetrikaScript = `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
  k.async=1;
  k.src=r;
  a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(101539371, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
`;

const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartcardio.ru/'),
  title: {
    default: "Купить кардиограф Smartcardio — портативный электрокардиограф для дома | ЭКГ прибор без проводов",
    template: "%s | Smartcardio — портативный электрокардиограф",
  },
  description: "Купить портативный электрокардиограф Smartcardio. Беспроводной кардиограф и ЭКГ прибор для дома — снятие ЭКГ и сатурации без геля и проводов, результат сразу в телефоне. Разработано и произведено в России.",
  keywords: [
    "купить кардиограф",
    "портативный электрокардиограф",
    "ЭКГ прибор для дома",
    "беспроводной кардиограф",
    "домашний кардиограф",
    "кардиограф для дома купить",
    "портативный ЭКГ аппарат",
    "электрокардиограф портативный купить",
    "ЭКГ без проводов",
    "кардиограф без геля",
    "прибор для снятия ЭКГ дома",
    "мобильный кардиограф",
    "персональный кардиограф",
    "Smartcardio",
    "Смарткардио",
    "кардиограф российского производства",
    "ЭКГ в телефоне",
    "сатурация",
    "медицинский прибор для дома",
  ],
  openGraph: {
    title: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома без проводов",
    description: "Беспроводной кардиограф Smartcardio — снятие ЭКГ и сатурации без геля и проводов, результат сразу в телефоне. Портативный электрокардиограф российского производства. Купить с доставкой по России.",
    type: "website",
    url: "https://smartcardio.ru/",
    images: [
      {
        url: "/images/smartcardioS1.png",
        width: 800,
        height: 600,
        alt: "Портативный электрокардиограф Smartcardio — ЭКГ прибор для дома",
      },
      {
        url: "/images/smartcardioS2.png",
        width: 800,
        height: 600,
        alt: "Купить кардиограф Smartcardio — беспроводной ЭКГ без геля и проводов",
      },
      {
        url: "/images/smartcardioS3.png",
        width: 800,
        height: 600,
        alt: "Smartcardio — домашний кардиограф с мобильным приложением",
      },
    ],
    siteName: "Smartcardio — портативный электрокардиограф",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить кардиограф Smartcardio — портативный ЭКГ прибор для дома",
    description: "Беспроводной электрокардиограф Smartcardio. ЭКГ и сатурация без геля и проводов. Результат сразу в телефоне. Произведено в России.",
    images: ["/images/smartcardioS1.png"],
  },
  alternates: {
    canonical: "https://smartcardio.ru/",
  },
  applicationName: "Smartcardio",
  creator: "Nick",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "Медицинские приборы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smartcardio",
              url: "https://smartcardio.ru",
              logo: "https://smartcardio.ru/images/smartcardioS1.png",
              description: "Купить портативный электрокардиограф Smartcardio. Беспроводной кардиограф и ЭКГ прибор для дома.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Russian",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Smartcardio — портативный электрокардиограф",
              url: "https://smartcardio.ru",
              description: "Купить кардиограф для дома. Портативный электрокардиограф Smartcardio — ЭКГ прибор без проводов и геля.",
              inLanguage: "ru",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://smartcardio.ru/store?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${raleway.variable}
            ${inter.variable}
            `}
      >

        <ReduxProvider>
        <AlertProvider>
            <TelegramProvider>
              <StartApp  />
              {children}
              <LayoutCart />
              <TelegramPopup />
              <LayoutBuyingPopup />
            </TelegramProvider>
          </AlertProvider>
        </ReduxProvider>


        <script
            dangerouslySetInnerHTML={{
              __html: yandexMetrikaScript
            }}
          />


        <script dangerouslySetInnerHTML={{__html : `
        function getUserId() {
        let sc_UserId = localStorage.getItem('sc_UserId');
        if (!sc_UserId) {
          sc_UserId = crypto.randomUUID();
          localStorage.setItem('sc_UserId', sc_UserId);
        }
        return sc_UserId;
      }
      let data = {
        sc_UserId: getUserId()
      };
      fetch("/uid/" + getUserId(), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Resp:", res);
      });
          `}} />

        <script dangerouslySetInnerHTML={{__html : `
          const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      console.log(visitorId)
      fetch("/uid/" + getUserId() + "/fp/" + visitorId, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    })
    .catch(error => console.error(error))
          `}} />


      </body>
    </html>
  );
}
