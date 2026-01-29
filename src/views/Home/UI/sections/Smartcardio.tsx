import React from "react";
import Header from "./Header";
import SmartcardioButtons from "../components/SmartcardioButtons";
import SmartcardioScrollArrow from "../components/SmartcardioScrollArrow";
import ResponsiveVideo from "@/shared/UI/ResponsiveVideo/ResponsiveVideo";

const Smartcardio: React.FC = () => {
  return (
    <>
      <div className="overflow-x-clip max-w-[100vw] flex flex-col relative bg-black h-screen md:h-auto">
        <ResponsiveVideo
          darkOpacity={0.5}
          imageHeight={300}
          imageWidth={380}
          posterSmall="/images/small-start.webp"
          posterMedim={"/images/smartcardioStart.webp"}
          videoProps={{
            controlsList: "nodownload",
            playsInline: true,
            autoPlay: true,
            muted: true,
            loop: true,
          }}
          videoName="smartcardio.mp4"
          className="absolute left-0 top-0 object-cover w-full h-full"
        />

        <Header />
        <section className="relative z-20 h-full">
          <div className="max-w-[1480px] flex flex-col mx-auto px-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center md:transform-none md:static md:pt-[clamp(2.5rem,1.071rem+7.14vw,7.5rem)] md:pb-[clamp(3.125rem,1.781rem+5.66vw,6.875rem)]">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[clamp(1.875rem,0.732rem+5.71vw,5.875rem)] leading-[120%] text-center text-white flex">
                СмартКардио{" "}
                <span className="text-[clamp(1.25rem,0.893rem+1.79vw,2.5rem)] -translate-y-5">
                  ®
                </span>
              </h1>
              <h3
                dangerouslySetInnerHTML={{
                  __html: `<span class="text-[#6cff01] font-semibold">Первое в мире</span> устройство, регистрирующее одновременно
              ЭКГ, сатурацию и пульсовую волну <br class="hidden"> без геля и проводов.`,
                }}
                className="mt-[30px] font-normal text-[clamp(1.188rem,0.902rem+1.43vw,2.188rem)] leading-[122%] text-center text-white max-w-[720px]"
              />
              <div className="mt-[clamp(2.188rem,1.406rem+3.91vw,2.813rem)] flex gap-[30px] 2xs:flex-col 2xs:w-[80%] 2xs:gap-3">
                <SmartcardioButtons />
              </div>
              <SmartcardioScrollArrow />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Smartcardio;
 
