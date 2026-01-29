import React from "react";
import PoliticBlock from "../components/PoliticsBlock";

const Footer = () => {
  return (
    <footer className="section bg-black">
      <div className="container  pb-[30px] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between gap-[15px]">
          <div className="flex flex-col">
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
                Разработчик ООО "АРИТМЕД"
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
                ОГРН 1227700287330 ИНН 9726013334 г.Москва
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
                Производитель ООО "СмартКардио"
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
                ОГРН 1256400009580 ИНН 6450120179 г.Саратов
            </p>
          </div>
          <div className="flex flex-col md:max-w-[600px] w-[100%] items-center justify-center">
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-right">
              Не является медицинским устройством, перед применением
              проконсультируйтесь со специалистом. Для расшифровки результата
              также обратитесь к специалисту. Обращаем Ваше внимание, что
              согласно действующему Российскому законодательству технически
              сложный товар надлежащего качества возврату и обмену не подлежит.
            </p>
          </div>
        </div>

        <PoliticBlock />

      </div>
    </footer>
  );
};

export default Footer;
