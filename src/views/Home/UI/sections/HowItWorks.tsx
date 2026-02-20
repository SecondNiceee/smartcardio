"use client"
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum"
import Reveal from "@/shared/UI/Reveal/Reveal"
import Video from "@/shared/UI/Video/Video"
import Image from "next/image"

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <Reveal character={CHARACTER.DOWNUP} className="container">
        <header className="how-it-works__header">Как это работает?</header>


        <div className="how-it-works__main relative z-[100]">
          <Video
            muted = {false}
            videoClassName="video !z-[100] !relative"
            poster="images/how-user-poster.png"
            controls={true}
            className="how-it-works__video !z-[100] !relative"
            videoName="how-to-use.mp4"
            
          />
        </div>
        <Image className="how-it-works__logo blur-[25px] opacity-30" src={"/images/logo.jpg"} alt="#" width={1200} height={1006} />
        <Image className="how-it-works__logo blur-[25px] opacity-30" src={"/images/logo.jpg"} alt="#" width={1200} height={1006} />
      </Reveal>
    </section>
  )
}

export default HowItWorks
