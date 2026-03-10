import { Metadata, Viewport } from "next";
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
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
    ym(91617395, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://smartcardio.ru/'),
  title: {
    default: "Купить кардиограф Smartcardio | Беспроводной ЭКГ прибор для дома",
    template: "%s | Smartcardio - Беспроводной кардиограф",
  },
  description: "Купить беспроводной кардиограф Smartcardio с доставкой по России. ЭКГ и измерение сатурации без геля и проводов. Результат сразу в телефоне. Российское производство. Гарантия качества.",
  keywords: [
    // Основные целевые запросы
    "кардиограф",
    "портативный кардиограф",
    "прибор для ЭКГ",
    "купить кардиограф",
    // Вариации основных запросов
    "беспроводной кардиограф",
    "кардиограф для дома",
    "домашний кардиограф",
    "переносной кардиограф",
    "компактный кардиограф",
    "мини кардиограф",
    "карманный кардиограф",
    // ЭКГ запросы
    "ЭКГ прибор",
    "ЭКГ аппарат",
    "прибор для снятия ЭКГ",
    "аппарат для ЭКГ дома",
    "электрокардиограф",
    "измерение ЭКГ дома",
    "домашний ЭКГ аппарат",
    "персональный ЭКГ монитор",
    // Функциональные запросы
    "сатурация",
    "пульсоксиметр",
    "мониторинг сердца",
    "кардиомонитор",
    "измерить пульс",
    "проверить сердце дома",
    // Брендовые запросы
    "Smartcardio",
    "Смарткардио",
    "СмартКардио",
    // Коммерческие запросы
    "кардиограф цена",
    "кардиограф купить недорого",
    "кардиограф 17900",
    "кардиограф стоимость",
    "кардиограф заказать",
    "кардиограф с доставкой",
    // Технические запросы
    "кардиограф российского производства",
    "беспроводной ЭКГ",
    "ЭКГ без проводов",
    "ЭКГ без геля",
    "мобильный кардиограф",
    "кардиограф с приложением",
    "кардиограф bluetooth",
    // Медицинские запросы
    "медицинский прибор для сердца",
    "прибор для измерения сердцебиения",
    "аппарат для контроля сердца",
    "домашняя диагностика сердца",
  ],
  authors: [{ name: "Smartcardio", url: "https://smartcardio.ru" }],
  creator: "Smartcardio",
  publisher: "Smartcardio",
  applicationName: "Smartcardio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  category: "Медицинское оборудование",
  classification: "Медицинские приборы, Кардиография, ЭКГ",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Купить беспроводной кардиограф Smartcardio | ЭКГ для дома",
    description: "Беспроводной кардиограф Smartcardio - ЭКГ и сатурация без геля и проводов. Результат сразу в телефоне. Российское производство с доставкой по всей России.",
    type: "website",
    url: "https://smartcardio.ru/",
    images: [
      {
        url: "https://smartcardio.ru/images/smartcardioS1.png",
        width: 1200,
        height: 630,
        alt: "Кардиограф Smartcardio - беспроводной прибор для измерения ЭКГ",
        type: "image/png",
      },
      {
        url: "https://smartcardio.ru/images/smartcardioS2.png",
        width: 800,
        height: 600,
        alt: "Smartcardio - портативный кардиограф для дома",
        type: "image/png",
      },
      {
        url: "https://smartcardio.ru/images/smartcardioS3.png",
        width: 800,
        height: 600,
        alt: "Smartcardio - измерение ЭКГ и сатурации",
        type: "image/png",
      },
    ],
    siteName: "Smartcardio - Беспроводной кардиограф",
    locale: "ru_RU",
    countryName: "Россия",
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить кардиограф Smartcardio | Беспроводной ЭКГ прибор",
    description: "Беспроводной кардиограф для дома. ЭКГ и сатурация без геля и проводов. Российское производство.",
    images: ["https://smartcardio.ru/images/smartcardioS1.png"],
    creator: "@smartcardio",
    site: "@smartcardio",
  },
  alternates: {
    canonical: "https://smartcardio.ru/",
    languages: {
      "ru-RU": "https://smartcardio.ru/",
    },
  },
  other: {
    "geo.region": "RU",
    "geo.placename": "Россия",
    "og:price:amount": "17900",
    "og:price:currency": "RUB",
    "product:price:amount": "17900",
    "product:price:currency": "RUB",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:brand": "Smartcardio",
    "msapplication-TileColor": "#ffffff",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

// JSON-LD микроразметка для организации (глобальная для всего сайта)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Smartcardio",
  "alternateName": ["Смарткардио", "СмартКардио", "Smart Cardio", "SmartCardio"],
  "url": "https://smartcardio.ru",
  "logo": "https://smartcardio.ru/images/logo.png",
  "description": "Российский производитель портативных кардиографов и приборов для ЭКГ. Купить кардиограф с доставкой по России.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Russian"],
  },
  "sameAs": [
    "https://t.me/smartcardio"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" dir="ltr">
      <head>
        {/* JSON-LD структурированные данные для SEO - Organization (глобальная) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Дополнительные мета-теги для SEO */}
        <meta httpEquiv="Content-Language" content="ru" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <meta name="language" content="Russian" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Smartcardio" />
        
        {/* Preconnect для оптимизации загрузки */}
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://smartcardio.ru/" />
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
