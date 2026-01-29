import Image from "next/image";
import React, { FC } from "react";

interface IndicatorProps {
  imageSrc: string;
  description: string;
}

const Indicator: FC<IndicatorProps> = ({ description, imageSrc }: IndicatorProps) => {
  return (
    <div className="flex flex-col gap-[35px] items-center rounded-[20px] p-6 bg-white black-shadow h-auto md:w-full md:gap-[15px] md:p-5 md:border md:border-black">
      <Image
        className="h-[169px] w-auto md:w-[20%] md:h-auto 2xs:w-[40%]"
        alt="Indicator icon"
        src={imageSrc}
        width={150}
        height={150}
      />
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-black max-w-[260px]"
      />
    </div>
  );
};

export default Indicator;
