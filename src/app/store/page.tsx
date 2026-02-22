
import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить кардиограф Smartcardio — каталог портативных электрокардиографов",
    description: "Каталог портативных электрокардиографов Smartcardio. Купить ЭКГ прибор для дома с доставкой по России. Беспроводные кардиографы без геля и проводов, результат сразу в смартфоне.",
    alternates: {
        canonical: "https://smartcardio.ru/store",
    },
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
        {
            "@type": "ListItem",
            position: 2,
            name: "Каталог кардиографов",
            item: "https://smartcardio.ru/store",
        },
    ],
};

const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Каталог портативных электрокардиографов Smartcardio",
    description: "Купить кардиограф для дома. Выберите портативный электрокардиограф Smartcardio.",
    numberOfItems: 2,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Портативный электрокардиограф СмартКардио",
            url: "https://smartcardio.ru/store/1",
            item: {
                "@type": "Product",
                name: "Портативный электрокардиограф СмартКардио",
                description: "СмартКардио — первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов.",
                image: "https://smartcardio.ru/images/device.png",
                brand: {
                    "@type": "Brand",
                    name: "СмартКардио",
                },
                sku: "SMARTCARDIO-001",
                countryOfOrigin: "RU",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "RUB",
                    price: 18816,
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                    priceValidUntil: "2026-12-31",
                    url: "https://smartcardio.ru/store/1",
                    seller: {
                        "@type": "Organization",
                        name: 'ООО "СмартКардио"',
                        taxID: "6450120179",
                    },
                    shippingDetails: {
                        "@type": "OfferShippingDetails",
                        shippingRate: {
                            "@type": "MonetaryAmount",
                            value: 0,
                            currency: "RUB",
                        },
                        shippingDestination: {
                            "@type": "DefinedRegion",
                            addressCountry: "RU",
                        },
                        deliveryTime: {
                            "@type": "ShippingDeliveryTime",
                            handlingTime: {
                                "@type": "QuantitativeValue",
                                minValue: 0,
                                maxValue: 1,
                                unitCode: "DAY",
                            },
                            transitTime: {
                                "@type": "QuantitativeValue",
                                minValue: 1,
                                maxValue: 7,
                                unitCode: "DAY",
                            },
                        },
                    },
                    hasMerchantReturnPolicy: {
                        "@type": "MerchantReturnPolicy",
                        applicableCountry: "RU",
                        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                    },
                },
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Портативный электрокардиограф СмартКардио + Чехол для хранения",
            url: "https://smartcardio.ru/store/2",
            item: {
                "@type": "Product",
                name: "Портативный электрокардиограф СмартКардио + Чехол для хранения",
                description: "СмартКардио + компактный чехол для хранения. Первое в мире устройство, регистрирующее ЭКГ, сатурацию и пульсовую волну без геля и проводов.",
                image: "https://smartcardio.ru/images/deviceWithCase.png",
                brand: {
                    "@type": "Brand",
                    name: "СмартКардио",
                },
                sku: "SMARTCARDIO-002",
                countryOfOrigin: "RU",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "RUB",
                    price: 19104,
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                    priceValidUntil: "2026-12-31",
                    url: "https://smartcardio.ru/store/2",
                    seller: {
                        "@type": "Organization",
                        name: 'ООО "СмартКардио"',
                        taxID: "6450120179",
                    },
                    shippingDetails: {
                        "@type": "OfferShippingDetails",
                        shippingRate: {
                            "@type": "MonetaryAmount",
                            value: 0,
                            currency: "RUB",
                        },
                        shippingDestination: {
                            "@type": "DefinedRegion",
                            addressCountry: "RU",
                        },
                        deliveryTime: {
                            "@type": "ShippingDeliveryTime",
                            handlingTime: {
                                "@type": "QuantitativeValue",
                                minValue: 0,
                                maxValue: 1,
                                unitCode: "DAY",
                            },
                            transitTime: {
                                "@type": "QuantitativeValue",
                                minValue: 1,
                                maxValue: 7,
                                unitCode: "DAY",
                            },
                        },
                    },
                    hasMerchantReturnPolicy: {
                        "@type": "MerchantReturnPolicy",
                        applicableCountry: "RU",
                        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                    },
                },
            },
        },
    ],
};

const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Купить кардиограф Smartcardio — каталог портативных электрокардиографов",
    description: "Каталог портативных электрокардиографов Smartcardio. Купить ЭКГ прибор для дома с доставкой по России.",
    url: "https://smartcardio.ru/store",
    inLanguage: "ru",
    isPartOf: {
        "@type": "WebSite",
        name: "Smartcardio",
        url: "https://smartcardio.ru",
    },
    about: {
        "@type": "Thing",
        name: "Портативные электрокардиографы",
        description: "Купить портативный электрокардиограф для дома — ЭКГ приборы без геля и проводов.",
    },
};

const Store = dynamic( () => (import("@/views/Store").then( (mod) => mod.Store )) )
const page = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
            />
            <Store />
        </>
    );
};

export default page;
