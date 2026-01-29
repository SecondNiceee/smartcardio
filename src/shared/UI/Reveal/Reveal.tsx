'use client'
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { CHARACTER } from './models/CharacterEnum';

type DivProps = JSX.IntrinsicElements["div"]

interface IReveal extends DivProps{
    children? : ReactNode,
    character: CHARACTER,
    className? : string,
    start? : boolean
} 

const animationClasses = {
  [CHARACTER.UPDOWN]: "animate-reveal-up-down",
  [CHARACTER.DOWNUP]: "animate-reveal-down-up",
  [CHARACTER.LEFT]: "animate-reveal-left",
  [CHARACTER.RIGHT]: "animate-reveal-right",
};

const Reveal:FC<IReveal> = ({children, character, className = "", start, ...props}) => {
    const [isRevealed, setIsRevealed] = useState<boolean>(false)
    const revealRef = useRef<HTMLDivElement>(null)

    const reveal = useCallback(() => {
        setIsRevealed(true)
    }, [])

    const observerCallback:IntersectionObserverCallback = useCallback((entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting){
            reveal()
        }
    }, [reveal])

    useEffect(() => {
        if (start && !isRevealed){
            reveal()
        }

        if (!isRevealed){
            const observer = new IntersectionObserver(observerCallback)
    
            if (revealRef.current){
                observer.observe(revealRef.current)
            }
            if (start){
                reveal()
            }
    
            return () => {
                observer.disconnect()
            }
        }
    }, [observerCallback, reveal, isRevealed, start])

    const animationClass = isRevealed ? animationClasses[character] || "" : "";

    return (
        <div 
          className={`${className} ${isRevealed ? animationClass : "opacity-0"} transition-all duration-500`} 
          ref={revealRef} 
          {...props}
        >
            {children}
        </div> 
    );
};

export default Reveal;
