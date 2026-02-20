import { getCdnUrl } from "@/shared/utils/createImgPath";

export type TypeOrder = {
    imageSrc : string,
    h : string,
    p : string
}
export const howOrderItems:TypeOrder[] = [
    {
        imageSrc : getCdnUrl("/images/cartIcon.png"),
        h : 'Выбирайте',
        p : "Укажите нужное количество приборов"
    },
    {
        imageSrc: getCdnUrl("/images/truckIcon.png"),
        h : "Оформляйте заказ",
        p : 'Выберите самый удобный вариант доставки'
    },
    {
        imageSrc : getCdnUrl('/images/moneyIcon.png'),
        h : 'Оплатите',
        p : 'Оплата при получени, вводить данные карты <br> не нужно'
    }
]
