import dynamic from "next/dynamic"
import type { Metadata } from "next";
import { device } from "@/shared/config/device";
import { deviceWithCase } from "@/shared/config/deviceWithCase";

export const metadata: Metadata = {
    title: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома",
    description: "Портативный электрокардиограф Smartcardio. Купить беспроводной кардиограф для домашнего использования. ЭКГ прибор для дома — снятие кардиограммы и сатурации без геля и проводов, результат в телефоне.",
};

const products: Record<string, typeof device> = {
    "1": device,
    "2": deviceWithCase,
};

function getProductJsonLd(id: string) {
    const product = products[id];
    if (!product) return null;

    const productName = id === "1"
        ? "Портативный электрокардиограф СмартКардио"
        : "Портативный электрокардиограф СмартКардио + Чехол для хранения";

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productName,
        description: product.description,
        image: product.images.map((img: string) => `https://smartcardio.ru${img}`),
        brand: {
            "@type": "Brand",
            name: "СмартКардио",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Smartcardio",
            url: "https://smartcardio.ru",
        },
        sku: `SMARTCARDIO-${String(product.id).padStart(3, "0")}`,
        category: "Медицинские приборы > Кардиографы > Портативные электрокардиографы",
        countryOfOrigin: "RU",
        weight: {
            "@type": "QuantitativeValue",
            value: product.weight,
            unitCode: "GRM",
        },
        width: {
            "@type": "QuantitativeValue",
            value: product.width,
            unitCode: "CMT",
        },
        depth: {
            "@type": "QuantitativeValue",
            value: product.length,
            unitCode: "CMT",
        },
        height: {
            "@type": "QuantitativeValue",
            value: product.height,
            unitCode: "CMT",
        },
        offers: {
            "@type": "Offer",
            url: `https://smartcardio.ru/store/${product.id}`,
            priceCurrency: "RUB",
            price: product.realPrice,
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
                value: "Сухие (без геля и проводов)",
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
            {
                "@type": "PropertyValue",
                name: "Пульсовая волна",
                value: "Да",
            },
        ],
    };
}

function getBreadcrumbJsonLd(id: string) {
    const product = products[id];
    const productName = product
        ? (id === "1" ? "Кардиограф СмартКардио" : "Кардиограф СмартКардио + Чехол")
        : "Товар";

    return {
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
            {
                "@type": "ListItem",
                position: 3,
                name: productName,
                item: `https://smartcardio.ru/store/${id}`,
            },
        ],
    };
}

const Product = dynamic( () => import("@/views/Product" ).then((mod) => mod.Product)  )
export default async function Page({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const id = (await params).id
    const productJsonLd = getProductJsonLd(id);
    const breadcrumbJsonLd = getBreadcrumbJsonLd(id);

    return (
        <>
            {productJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Product id={id} />
        </>
    );
  }
