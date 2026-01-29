"use client"
import { LottieOptions, useLottie } from "lottie-react";
import React, { forwardRef } from "react";
import coper from "@/shared/animations/coper.json";

interface InteractiveLottieProps {
  className?: string;
}

const options: LottieOptions = {
  animationData: coper,
  loop: true,
  style: {
    width: "300px"
  }
};

const InteractiveLottie = forwardRef<HTMLDivElement, InteractiveLottieProps>(
  ({ className = "" }, ref) => {
    const { View } = useLottie(options);

    return (
      <div ref={ref} className={`show ${className}`}>
        {View}
      </div>
    );
  }
);

InteractiveLottie.displayName = "InteractiveLottie";

export default React.memo(InteractiveLottie);
