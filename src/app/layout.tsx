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
  verification: {
    yandex: "your-yandex-verification-code",
    google: "your-google-verification-code",
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
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

// JSON-LD микроразметка для организации
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Smartcardio",
  "alternateName": ["Смарткардио", "СмартКардио", "Smart Cardio"],
  "url": "https://smartcardio.ru",
  "logo": "https://smartcardio.ru/images/logo.png",
  "description": "Российский производитель портативных кардиографов и приборов для ЭКГ. Купить кардиограф с доставкой по России.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Россия"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Russian"]
  },
  "sameAs": [
    "https://t.me/smartcardio"
  ]
};

// JSON-LD микроразметка для первого товара - СмартКардио
const productSchema1 = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Портативный кардиограф СмартКардио",
  "alternateName": ["Кардиограф Smartcardio", "Прибор для ЭКГ СмартКардио", "Беспроводной кардиограф"],
  "description": "СмартКардио - первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов. Портативный кардиограф для домашнего использования.",
  "sku": "SMARTCARDIO-001",
  "mpn": "SC-DEVICE-001",
  "gtin13": "4600000000001",
  "image": [
    "https://smartcardio.ru/images/device.png",
    "https://smartcardio.ru/images/hoverDevice.png",
    "https://smartcardio.ru/images/smartcardioS6.png",
    "https://smartcardio.ru/images/smartcardioS8.png",
    "https://smartcardio.ru/images/smartcardioS1.png",
    "https://smartcardio.ru/images/smartcardioS2.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Smartcardio"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Smartcardio",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    }
  },
  "category": "Кардиографы",
  "material": "Медицинский пластик",
  "weight": {
    "@type": "QuantitativeValue",
    "value": "500",
    "unitCode": "GRM"
  },
  "width": {
    "@type": "QuantitativeValue",
    "value": "24",
    "unitCode": "CMT"
  },
  "depth": {
    "@type": "QuantitativeValue",
    "value": "33",
    "unitCode": "CMT"
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": "5",
    "unitCode": "CMT"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://smartcardio.ru/store",
    "priceCurrency": "RUB",
    "price": "17900",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Smartcardio"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "RUB"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "RU"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": "1",
          "maxValue": "2",
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": "3",
          "maxValue": "14",
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Покупатель"
      },
      "reviewBody": "Отличный портативный кардиограф! Легко использовать дома, результаты сразу видны в приложении."
    }
  ]
};

// JSON-LD микроразметка для второго товара - СмартКардио + Чехол
const productSchema2 = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Портативный кардиограф СмартКардио + Чехол для хранения",
  "alternateName": ["Кардиограф Smartcardio с чехлом", "Прибор для ЭКГ с чехлом"],
  "description": "СмартКардио + Компактный чехол для хранения. Первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов.",
  "sku": "SMARTCARDIO-002",
  "mpn": "SC-DEVICE-CASE-002",
  "gtin13": "4600000000002",
  "image": [
    "https://smartcardio.ru/images/deviceWithCase.png",
    "https://smartcardio.ru/images/hoverDevice.png",
    "https://smartcardio.ru/images/deviceWithCaseS3.png",
    "https://smartcardio.ru/images/smartcardioS6.png",
    "https://smartcardio.ru/images/smartcardioS8.png",
    "https://smartcardio.ru/images/hoverDeviceWitCase.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Smartcardio"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Smartcardio",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    }
  },
  "category": "Кардиографы",
  "weight": {
    "@type": "QuantitativeValue",
    "value": "500",
    "unitCode": "GRM"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://smartcardio.ru/store",
    "priceCurrency": "RUB",
    "price": "18200",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Smartcardio"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "RUB"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "RU"
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "85",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// ItemList для списка товаров (помогает поисковикам понять каталог)
const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Каталог кардиографов Smartcardio",
  "description": "Портативные кардиографы и приборы для ЭКГ от российского производителя",
  "numberOfItems": 2,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Портативный кардиограф СмартКардио",
        "url": "https://smartcardio.ru/store",
        "image": "https://smartcardio.ru/images/device.png",
        "offers": {
          "@type": "Offer",
          "price": "17900",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Портативный кардиограф СмартКардио + Чехол",
        "url": "https://smartcardio.ru/store",
        "image": "https://smartcardio.ru/images/deviceWithCase.png",
        "offers": {
          "@type": "Offer",
          "price": "18200",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }
    }
  ]
};

// JSON-LD микроразметка для веб-сайта
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Smartcardio - Беспроводной кардиограф",
  "alternateName": "Смарткардио",
  "url": "https://smartcardio.ru",
  "description": "Официальный сайт Smartcardio - купить беспроводной кардиограф для дома с доставкой по России",
  "publisher": {
    "@type": "Organization",
    "name": "Smartcardio"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://smartcardio.ru/store?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "ru-RU"
};

// JSON-LD микроразметка для медицинского устройства
const medicalDeviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalDevice",
  "name": "Smartcardio",
  "description": "Беспроводной кардиограф для измерения ЭКГ и сатурации крови в домашних условиях",
  "manufacturer": {
    "@type": "Organization",
    "name": "Smartcardio",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    }
  },
  "purpose": "Измерение электрокардиограммы (ЭКГ) и уровня сатурации кислорода в крови",
  "category": "Кардиограф"
};

// JSON-LD микроразметка BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://smartcardio.ru"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Каталог",
      "item": "https://smartcardio.ru/store"
    }
  ]
};

// FAQ микроразметка для SEO (оптимизирована под целевые запросы)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Что такое портативный кардиограф и как он работает?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Портативный кардиограф Smartcardio - это компактный прибор для ЭКГ, который позволяет измерять электрокардиограмму и сатурацию кислорода в крови дома без проводов и геля. Достаточно приложить прибор к груди, и результат мгновенно передается на смартфон через Bluetooth."
      }
    },
    {
      "@type": "Question",
      "name": "Сколько стоит кардиограф Smartcardio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Цена портативного кардиографа СмартКардио составляет 17 900 рублей. Также доступен комплект с чехлом для хранения за 18 200 рублей. Доставка по России бесплатная."
      }
    },
    {
      "@type": "Question",
      "name": "Какой прибор для ЭКГ лучше купить для домашнего использования?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Для домашнего использования рекомендуем портативный кардиограф Smartcardio. Это первый в мире прибор для ЭКГ, который одновременно измеряет электрокардиограмму, сатурацию и пульсовую волну без геля и проводов. Прибор прост в использовании и не требует медицинских знаний."
      }
    },
    {
      "@type": "Question",
      "name": "Где производится кардиограф Smartcardio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smartcardio - это полностью российский продукт. Кардиограф разработан и производится в России с гарантией качества."
      }
    },
    {
      "@type": "Question",
      "name": "Как купить кардиограф с доставкой по России?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Купить портативный кардиограф Smartcardio можно на нашем официальном сайте smartcardio.ru. Мы осуществляем бесплатную доставку по всей России. Срок доставки от 3 до 14 дней в зависимости от региона."
      }
    },
    {
      "@type": "Question",
      "name": "Чем портативный кардиограф отличается от обычного?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Портативный кардиограф Smartcardio компактный, беспроводной и не требует геля для измерения ЭКГ. В отличие от больничных аппаратов, его можно использовать дома самостоятельно. Результаты мгновенно отображаются в мобильном приложении на смартфоне."
      }
    },
    {
      "@type": "Question",
      "name": "Можно ли измерить сердцебиение с помощью Smartcardio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да, кардиограф Smartcardio измеряет не только ЭКГ, но и пульсовую волну, сатурацию кислорода в крови. Это позволяет комплексно контролировать состояние сердечно-сосудистой системы в домашних условиях."
      }
    }
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
        {/* JSON-LD структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalDeviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
