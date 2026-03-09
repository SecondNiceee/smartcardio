import dynamic from "next/dynamic"
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const id = (await params).id;
  
  // Формируем SEO-оптимизированные метаданные для страницы товара
  const productName = id === 'smartcardio' ? 'Smartcardio' : `Кардиограф ${id}`;
  
  return {
    title: `${productName} - Купить беспроводной кардиограф | Цена, характеристики`,
    description: `Купить ${productName} - беспроводной кардиограф для измерения ЭКГ и сатурации без геля и проводов. Официальный сайт. Доставка по России. Гарантия качества.`,
    keywords: [
      `${productName} купить`,
      `${productName} цена`,
      "беспроводной кардиограф",
      "купить ЭКГ прибор",
      "кардиограф для дома",
      "портативный кардиограф",
      "измерение ЭКГ дома",
    ],
    openGraph: {
      title: `${productName} - Беспроводной кардиограф | Официальный магазин`,
      description: `${productName} - беспроводной кардиограф для измерения ЭКГ и сатурации. Результат сразу в телефоне. Российское производство.`,
      url: `https://smartcardio.ru/store/${id}`,
      type: "website",
      images: [
        {
          url: "https://smartcardio.ru/images/smartcardioS1.png",
          width: 1200,
          height: 630,
          alt: `Кардиограф ${productName}`,
        },
      ],
    },
    alternates: {
      canonical: `https://smartcardio.ru/store/${id}`,
    },
  };
}

const Product = dynamic( () => import("@/views/Product" ).then((mod) => mod.Product)  )
export default async function Page({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const id = (await params).id
    return <Product id={id} />
  }
