import dynamic from "next/dynamic"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома",
    description: "Портативный электрокардиограф Smartcardio. Купить беспроводной кардиограф для домашнего использования. ЭКГ прибор для дома — снятие кардиограммы и сатурации без геля и проводов, результат в телефоне.",
};

const Product = dynamic( () => import("@/views/Product" ).then((mod) => mod.Product)  )
export default async function Page({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const id = (await params).id
    return <Product id={id} />
  }
