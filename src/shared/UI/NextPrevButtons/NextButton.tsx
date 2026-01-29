import React from "react";
import StrangeArrow from "./StrangeArrow";
import JustArrow from "./JustArrow";

export type arrowsType = "circle" | "just";


const NextButton = ({ arrowType, className }: { arrowType?: arrowsType, className? : string }) => {
  return (
    <div className={`${className}  flex items-center justify-center ${arrowType === "just" ? "absolute right-2 z-10" : ""}`}>
      {arrowType === "just" ? (
        <JustArrow className="-rotate-90 w-[70%]" />
      ) : (
        arrowType === "circle" && (
          <div className="circle cursor-pointer min-w-[80px] max-h-[80px] h-[80px] w-[80px] transition-colors duration-500 rounded-full flex items-center justify-center bg-white border border-solid border-black hover:bg-black [&:hover_.arrow-path]:stroke-white rotate-180 md:static md:transform-none md:rotate-180 absolute right-[30px] top-1/2 -translate-y-1/2 z-[300] scale-[0.8] max-[480px]:scale-[0.7] max-[420px]:scale-50">
            <StrangeArrow />{" "}
          </div>
        )
      )}
    </div>
  );
};

export default NextButton;
