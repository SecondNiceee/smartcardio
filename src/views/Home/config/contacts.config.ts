import { getCdnUrl } from "@/shared/utils/createImgPath";

export type TypeContact = {
    imageSrc : string,
    link : string,
    name : string,
    iconSvg : string
}

export const contacts:TypeContact[] = [
    {
        iconSvg : getCdnUrl("/images/vk.svg"),
        imageSrc : getCdnUrl("/images/vk.jpg"),
        link : "https://vk.com/smart_cardio",
        name : "Научно-популярная медицина"
    },
    {
        iconSvg : getCdnUrl("/images/telegram.svg"),
        imageSrc : getCdnUrl("/images/tg.jpg"),
        link : "https://t.me/smart_cardio",
        name : "Для врачей"
    },
    {
        iconSvg : getCdnUrl("/images/dzen.svg"),
        imageSrc : getCdnUrl("/images/blog.jpg"),
        link : "https://dzen.ru/smartcardio",
        name : "Наш блог"
    }
]
