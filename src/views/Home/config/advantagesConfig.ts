import { getCdnUrl } from "@/shared/utils/createImgPath";

interface IadvantagesConfig{
    img : string,
    header : string,
    p : string
}

export const advantagesConfig:IadvantagesConfig[] = [
    {
        img : getCdnUrl("/images/advantage1.svg"),
        header : "Простота использования",
        p : "Приложить прибор к себе <br> и подождать... Всего 30 секунд неподвижно"
    },
    {
            img : getCdnUrl("/images/indicator2.svg"),
            header : "Шесть отведений ЭКГ",
            p : "Это портативный прибор, но он регистрирует все 6 отведений <br> с медицинской точностью, как это делают стационарные кардиографы"
    },
    {
        img : getCdnUrl("/images/advantage3.svg"),
        header : "На связи с врачом",
        p : "Удобный формат записи <br> и возможность оперативной передачи данных для онлайн-консультаций <br> или очного приема у врача"
    },
    {
        img : getCdnUrl("/images/advantage4.png"),
        header : "Несколько функций в одном приборе",
        p : "Объединяет ЭКГ и пульсоксиметрию. Комплексные показатели помогают <br> в диагностике заболеваний"
    },
    {
        img : getCdnUrl("/images/whiteIndicator1.svg"),
        header : "Автономность",
        p : "Работает как со смартфоном, <br> так и в автономном режиме"
    },
    {
        img : getCdnUrl("/images/advantage6.png"),
        header : "Экономит деньги",
        p : "Отсутствие расходных материалов (электроды, гели, провода, переходники) не требует дополнительных или скрытых затрат"
    }
]
