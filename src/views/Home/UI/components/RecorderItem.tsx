'use client'

import React from "react"

export const RecorderItem = React.memo(({ index, text, activeSlide, changeSlide }: { index: number, text: string, activeSlide: number, changeSlide: (index: number) => void }) => {
  const clickHandler = () => {
    changeSlide(index)
  }
  return (
    <div
      onClick={clickHandler}
      key={index}
      className={`w-full flex items-center justify-center border-2 px-2 py-2 border-black border-solid rounded-[10px] h-full transition-[background-color] duration-[400ms] cursor-pointer ${activeSlide === index ? "bg-black" : ""}`}
    >
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className={`text-[clamp(1.063rem,0.658rem+0.84vw,1.438rem)] leading-[175%] text-center relative z-10 transition-colors duration-[400ms] ${activeSlide === index ? "text-white" : "text-black"}`}
      />
    </div>
  )
})

RecorderItem.displayName = "RecorderItem";
