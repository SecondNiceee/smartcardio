import Video from "@/shared/UI/Video/Video";
import React from "react";
import Reveal from "@/shared/UI/Reveal/Reveal";
import Image from "next/image";
import TechnologysStoreLink from "../components/TechnologysStoreLink";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";

const Technologys = () => {
  return (
    <section className="overflow-x-clip max-w-[100vw]">
      <div className="max-w-[1140px] flex flex-col mx-auto py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)] px-5 gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)]">
        <Reveal character={CHARACTER.UPDOWN}>
          <header
            dangerouslySetInnerHTML={{
              __html: "Высокие технологии <br> в повседневной жизни",
            }}
            className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black mx-auto"
          />
        </Reveal>

        <div className="flex justify-between items-center lg:gap-5 md:flex-col-reverse">
          <Reveal
            character={CHARACTER.LEFT}
            className="flex flex-col w-1/2 lg:w-[75%] md:max-w-full md:w-full"
          >
            <div className="relative">
              <div className="flex flex-col p-[30px] gap-[30px] w-full shadow-[0px_0px_8px_0px_rgba(34,60,80,0.2)] rounded-[20px]">
                <div className="flex flex-col gap-10">
                  <p className="sub-title font-normal">Прибор СмартКардио®</p>

                  <ul className="text-left flex flex-col gap-7">
                    <li className="sub-title text-left !text-black !font-normal">
                      - <span className="font-semibold">бережёт</span> Ваше время
                    </li>
                    <li className="sub-title text-left !text-black !font-normal">
                      - <span className="font-semibold">помогает</span> снимать показатели, когда это действительно
                      информативно, например, при изменении самочувствия или
                      переменах в образе жизни
                    </li>
                    <li className="sub-title text-left !text-black !font-normal">
                      - <span className="font-semibold">хранит</span> историю ритма Вашего сердца
                    </li>
                  </ul>

                  <TechnologysStoreLink />
                </div>
              </div>

              <Image
                width={755}
                height={821}
                src={"/images/videoLiner.svg"}
                alt="Decorative liner"
                className="z-[-1] min-w-[600px] absolute left-1/2 top-1/2 blur-[100px] opacity-80 -translate-x-1/2 -translate-y-1/2 lg:min-w-[500px] lg:-translate-x-[60%] md:hidden"
              />
            </div>
          </Reveal>

          <div className="flex justify-center h-full items-center">
            <Video
              controlsList="nodownload"
              playsInline
              autoPlay
              muted
              loop
              className="flex justify-center items-center"
              videoClassName="h-full w-[70%] object-contain ml-auto xl:w-[70%] lg:ml-0 lg:w-[70%] md:mx-auto sm:w-[60%]"
              videoName="chuck.webm"
              type={"video/webm"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologys;
