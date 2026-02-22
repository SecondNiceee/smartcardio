
import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома без проводов",
    description: "Купить кардиограф Smartcardio с доставкой по России. Портативный электрокардиограф для домашнего использования. ЭКГ прибор для дома без геля и проводов — снимайте кардиограмму и сатурацию через смартфон. Российское производство.",
    alternates: {
        canonical: "https://smartcardio.ru/",
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "После установки приложения нужно ли платить за подписку, чтобы получать автоматическую расшифровку ЭКГ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Нет. Приложение СмартКардио уже включает встроенную систему автоматической интерпретации ЭКГ на основе алгоритмов искусственного интеллекта. Дополнительных подписок или платных функций не требуется.",
            },
        },
        {
            "@type": "Question",
            name: "Как портативный электрокардиограф записывает 6 отведений ЭКГ без проводов и геля?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "СмартКардио работает на основе закона Эйнтховена. Во время контакта с кожей устройство регистрирует разность потенциалов между конечностями (классические отведения I, II, III и усиленные от конечностей aVR, aVL, aVF). Благодаря использованию «сухих» электродов и продуманной схемотехники, регистрация проходит без геля, липких электродов или проводов.",
            },
        },
        {
            "@type": "Question",
            name: "Какие параметры ЭКГ можно изменить в приложении для домашнего кардиографа?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "В настройках вы можете выбрать: скорость записи (25 или 50 мм/сек), длительность (от 5 сек до нескольких минут), амплитуду сигнала (10 или 20 мм/мВ), отображение дополнительных параметров — пульсовой волны и графика дыхания.",
            },
        },
        {
            "@type": "Question",
            name: "Работает ли портативный электрокардиограф СмартКардио с iPhone?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Да. Приложение совместимо со всеми современными смартфонами на базе iOS и Android. Загрузка доступна в магазинах приложений.",
            },
        },
        {
            "@type": "Question",
            name: "Можно ли использовать ЭКГ прибор для дома СмартКардио для длительного мониторинга, как холтер?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Нет. СмартКардио предназначен для регистрации по требованию — в момент жалоб или при регулярном мониторинге, что не требует длительного ношения и репрезентативно для выявления нарушений.",
            },
        },
        {
            "@type": "Question",
            name: "На какое время хватает аккумулятора портативного кардиографа без подзарядки?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "При среднем режиме использования (до 10 измерений в день) устройство работает до 3 месяцев без подзарядки.",
            },
        },
        {
            "@type": "Question",
            name: "Как проверяется точность домашнего кардиографа СмартКардио?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Каждое устройство проходит индивидуальное тестирование на сертифицированном медицинском оборудовании. Результаты откалиброваны в соответствии с нормативами, на все приборы распространяется гарантия производителя.",
            },
        },
        {
            "@type": "Question",
            name: "Заменяет ли автоматический анализ ЭКГ прием у врача?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Нет. Прибор помогает записывать нарушения сердечного ритма для последующей консультации с врачом. Все записи сохраняются в формате PDF в приложении. Автоматический анализ (на основе ИИ) служит вспомогательным средством для акцентирования внимания на возможных проблемах и сокращения времени до обращения к специалисту.",
            },
        },
    ],
};

const mainProductJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Портативный электрокардиограф СмартКардио",
    alternateName: "Smartcardio — беспроводной кардиограф для дома",
    description: "СмартКардио — первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов. Портативный электрокардиограф для домашнего использования. ЭКГ прибор для дома.",
    image: [
        "https://smartcardio.ru/images/device.png",
        "https://smartcardio.ru/images/smartcardioS1.png",
        "https://smartcardio.ru/images/smartcardioS2.png",
        "https://smartcardio.ru/images/smartcardioS3.png",
    ],
    brand: {
        "@type": "Brand",
        name: "СмартКардио",
    },
    manufacturer: {
        "@type": "Organization",
        name: "Smartcardio",
        url: "https://smartcardio.ru",
    },
    category: "Медицинские приборы > Кардиографы > Портативные электрокардиографы",
    sku: "SMARTCARDIO-001",
    mpn: "SC-ECG-6L",
    countryOfOrigin: "RU",
    offers: {
        "@type": "Offer",
        url: "https://smartcardio.ru/store/1",
        priceCurrency: "RUB",
        price: 18816,
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
            "@type": "Organization",
            name: "Smartcardio",
        },
        shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "RU",
            },
        },
    },
    additionalProperty: [
        {
            "@type": "PropertyValue",
            name: "Количество отведений ЭКГ",
            value: "6",
        },
        {
            "@type": "PropertyValue",
            name: "Тип электродов",
            value: "Сухие (без геля)",
        },
        {
            "@type": "PropertyValue",
            name: "Беспроводное подключение",
            value: "Да",
        },
        {
            "@type": "PropertyValue",
            name: "Время работы без подзарядки",
            value: "До 3 месяцев",
        },
        {
            "@type": "PropertyValue",
            name: "Совместимость",
            value: "iOS, Android",
        },
        {
            "@type": "PropertyValue",
            name: "Измерение сатурации",
            value: "Да",
        },
    ],
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://smartcardio.ru/",
        },
    ],
};

const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома",
    description: "Купить кардиограф для домашнего использования. Портативный электрокардиограф Smartcardio — ЭКГ без геля и проводов, результат в телефоне.",
    url: "https://smartcardio.ru/",
    inLanguage: "ru",
    about: {
        "@type": "MedicalDevice",
        name: "Портативный электрокардиограф СмартКардио",
        description: "Беспроводной кардиограф для регистрации 6 отведений ЭКГ, сатурации и пульсовой волны без геля и проводов.",
        manufacturer: {
            "@type": "Organization",
            name: "Smartcardio",
        },
    },
    specialty: {
        "@type": "MedicalSpecialty",
        name: "Кардиология",
    },
    lastReviewed: "2026-02-22",
};


const Page = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mainProductJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
            />
            <Home />
        </>
    );
};

export default Page;
