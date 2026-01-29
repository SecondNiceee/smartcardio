import React from 'react';
import StrangeArrow from './StrangeArrow';
import JustArrow from './JustArrow';

export type arrowsType = "circle" | "just";

const PrevButton = ({ arrowType, className = "" }: { arrowType?: arrowsType, className?: string }) => {
    return (
      <div className={`${className} flex items-center justify-center ${arrowType === "just" ? "absolute left-2 z-10" : ""}`}>
        {arrowType === "just" ? (
          <JustArrow className="rotate-90 w-[70%]" />
        ) : (
          arrowType === "circle" && (
            <div className="group cursor-pointer min-w-[80px] max-h-[80px] h-[80px] w-[80px] transition-colors duration-500 rounded-full flex items-center justify-center bg-white border border-black hover:bg-black md:z-[300] md:absolute md:left-[30px] md:top-1/2 md:-translate-y-1/2 md:scale-[0.8] 2xs:scale-[0.7] xs:scale-[0.5]">
              <StrangeArrow className="rotate-180" />
            </div>
          )
        )}
      </div>
    );
};

export default PrevButton;
