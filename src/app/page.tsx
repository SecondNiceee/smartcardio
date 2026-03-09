
import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: "Купить кардиограф Smartcardio | Беспроводной ЭКГ прибор для дома с доставкой по России",
  description: "Официальный сайт Smartcardio. Купить беспроводной кардиограф для измерения ЭКГ и сатурации без геля и проводов. Результат сразу в телефоне. Российское производство. Бесплатная доставка. Гарантия качества.",
  keywords: [
    "купить кардиограф",
    "кардиограф smartcardio",
    "беспроводной кардиограф",
    "кардиограф для дома",
    "домашний кардиограф",
    "портативный кардиограф",
    "кардиограф цена",
    "ЭКГ прибор",
    "ЭКГ аппарат купить",
    "электрокардиограф",
    "измерение ЭКГ дома",
    "сатурация кислорода",
    "пульсоксиметр",
    "мониторинг сердца",
    "кардиомонитор",
    "Smartcardio",
    "Смарткардио",
    "медицинский прибор для дома",
    "кардиограф российского производства",
    "беспроводной ЭКГ прибор",
    "ЭКГ без проводов",
    "ЭКГ без геля",
    "мобильный кардиограф",
    "кардиограф с приложением",
    "купить кардиограф недорого",
    "кардиограф с доставкой",
    "лучший кардиограф для дома",
    "персональный кардиограф",
    "кардиограф отзывы",
  ],
  alternates: {
    canonical: "https://smartcardio.ru/",
  },
};

const Page = () => {
    return (
        <>
            {/* JSON-LD структурированные данные для главной страницы */}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalDeviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Home />
        </>
    );
};

export default Page;
