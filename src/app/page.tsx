
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
  "category": ["Кардиографы", "Домашняя диагностика", "ЭКГ приборы"],
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
        "@type": "UnitPriceSpecification",  // ✅ Меняем тип здесь
        "price": "150",
        "priceCurrency": "RUB",
        "priceType": "https://schema.org/MinimumPrice"  // ✅ Указываем, что это мин. цена
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "RU"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 2,
          "unitCode": "DAY"
        }
      }
    }
  },
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "20",
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
        "name": "Геннадий В."
      },
      "reviewBody": "аппарат прекрасен. Отлично снимает кардиграмму.",
      "datePublished": "2024-11-01"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Вероника Юрьевна"
      },
      "reviewBody": "Легкий, удобный, быстрый, результат сразу в телефоне! Для меня это мега удобно, я еще не встречала такого прибора в онлайн-магазинах. Недостатки: Нет",
      "datePublished": "2023-12-01"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Титов Николай"
      },
      "reviewBody": "Отличный портативный кардиограф! Легко использовать дома, результаты сразу видны в приложении."
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
  "inLanguage": "ru-RU"
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

// HowTo микроразметка - инструкция по использованию
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Как использовать портативный кардиограф Smartcardio",
  "description": "Пошаговая инструкция по использованию беспроводного кардиографа Smartcardio для измерения ЭКГ дома",
  "image": "https://smartcardio.ru/images/device.png",
  "totalTime": "PT5M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Подготовка устройства",
      "text": "Распакуйте кардиограф Smartcardio и убедитесь, что батарея заряжена. Скачайте мобильное приложение Smartcardio на смартфон.",
      "image": "https://smartcardio.ru/images/device.png"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Подключение по Bluetooth",
      "text": "Включите кардиограф и синхронизируйте его со смартфоном через мобильное приложение. Убедитесь, что связь установлена успешно.",
      "image": "https://smartcardio.ru/images/device.png"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Размещение прибора",
      "text": "Приложите кардиограф к груди в районе сердца, прижимая его плотно к коже. Держите прибор неподвижно во время измерения.",
      "image": "https://smartcardio.ru/images/device.png"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Запуск измерения",
      "text": "Нажмите кнопку на приборе или в приложении для начала измерения ЭКГ, сатурации и пульса. Процесс занимает несколько секунд.",
      "image": "https://smartcardio.ru/images/device.png"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Получение результатов",
      "text": "Результаты измерения (ЭКГ, сатурация, пульс) мгновенно отобразятся в приложении. Вы можете сохранить результаты и поделиться ими с врачом.",
      "image": "https://smartcardio.ru/images/device.png"
    }
  ]
};

// VideoObject микроразметка - видео инструкция
const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Как пользоваться кардиографом Smartcardio - видео инструкция",
  "description": "Видео инструкция по использованию портативного кардиографа Smartcardio для измерения ЭКГ и сатурации кислорода дома",
  "thumbnailUrl": "https://smartcardio.ru/images/how-user-poster.png",
  "uploadDate": "2024-01-01T00:00:00Z",
  "duration": "PT5M",
  "contentUrl": "https://smartcardio.ru/videos/how-to-use.mp4",
  "embedUrl": "https://smartcardio.ru/videos/how-to-use.mp4",
  "author": {
    "@type": "Organization",
    "name": "Smartcardio"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Smartcardio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://smartcardio.ru/images/logo.png",
      "width": 250,
      "height": 60
    }
  },
  "interactionCount": "1000"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
            />
            <Home />
        </>
    );
};

export default Page;
