"use client"
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum"
import Reveal from "@/shared/UI/Reveal/Reveal"
import Video from "@/shared/UI/Video/Video"
import Image from "next/image"

const HowItWorks = () => {
  return (
    <section className="overflow-x-clip max-w-[100vw]">
      <Reveal
        character={CHARACTER.DOWNUP}
        className="max-w-[1480px] flex flex-col mx-auto px-5 gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)] items-center relative"
      >
        <header className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black">
          Как это работает?
        </header>

        <div className="rounded-[32px] flex justify-center w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative z-[100]">
          <Video
            muted={false}
            videoClassName="rounded-[30px] py-[50px] px-[100px] w-1/2 shadow-inner lg:rounded-2xl lg:py-20 lg:px-10 lg:border-none md:rounded-2xl md:py-10 md:px-5 md:border-none !z-[100] !relative"
            poster="images/how-user-poster.png"
            controls={true}
            className="w-[45%] h-full rounded-[30px] leading-none object-cover p-[2px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] lg:w-[60%] md:rounded-[20px] md:w-[80%] md:p-0 md:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] !z-[100] !relative"
            videoName="how-to-use.mp4"
          />
        </div>

        <Image
          className="absolute w-[15%] blur-[25px] opacity-30 left-[5%] top-[10%] md:hidden"
          src={"/images/logo.jpg"}
          alt="Decorative logo"
          width={1200}
          height={1006}
        />
        <Image
          className="absolute w-[15%] blur-[25px] opacity-30 right-[5%] bottom-[10%] md:hidden"
          src={"/images/logo.jpg"}
          alt="Decorative logo"
          width={1200}
          height={1006}
        />
      </Reveal>
    </section>
  )
}

export default HowItWorks
