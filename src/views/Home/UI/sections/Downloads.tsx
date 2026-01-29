import React from "react";
import { downloadsButtons } from "../../config";
import PhoneButton from "@/shared/UI/PhoneButton/PhoneButton";
import Reveal from "@/shared/UI/Reveal/Reveal";
import AppleSvg from "../components/AppleSvg";
import DownloadsButtons from "../components/DownloadsButtons";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";

const Downloads = () => {
  return (
    <section id="downloads" className="overflow-x-clip max-w-[100vw]">
      <div className="max-w-[1480px] flex flex-col mx-auto gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] items-center py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)] px-[clamp(1.25rem,-6.166rem+15.45vw,8.125rem)]">
        <header
          dangerouslySetInnerHTML={{
            __html:
              "Скачайте приложение СмартКардио® <br> для работы с прибором",
          }}
          className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black max-w-[880px]"
        />
        <Reveal
          character={CHARACTER.RIGHT}
          className="flex justify-between items-center w-full gap-[clamp(1.438rem,0.291rem+2.39vw,2.5rem)] md:grid md:gap-3 md:grid-cols-2 xs:grid-cols-1"
        >
          {downloadsButtons.map((e, i) => {
            return (
              <PhoneButton
                className="hover:[&_.apple]:fill-black"
                svgItem={e.imageName === "apple.svg" ? <AppleSvg /> : undefined}
                key={i}
                href={e.href}
                imageName={e.imageName}
                text={e.text}
              />
            );
          })}
        </Reveal>
        <DownloadsButtons />
      </div>
    </section>
  );
};

export default Downloads;
