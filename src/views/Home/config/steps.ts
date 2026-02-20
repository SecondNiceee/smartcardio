import { getCdnUrl } from "@/shared/utils/createImgPath";

export type TypeSteps = {
    text : string,
    imagePath : string
}

export const steps:TypeSteps[] = [
    {
        text : "Взять прибор СмартКардио®",
        imagePath : getCdnUrl("/images/step3.jpg")
    },
    {
        text : "Подождать 20 секунд пока идет запись",
        imagePath : getCdnUrl("/images/step1.jpg")
    },
    {
        text : "Результат - в приложении",
        imagePath : getCdnUrl("/images/step2.jpg")
    }
]

