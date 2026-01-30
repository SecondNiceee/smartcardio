"use client";
import React, { useState } from "react";
import HeaderBurger from "../components/HeaderBurger";
import BurgerLinks from "../components/BurgerLinks";
import Link from "next/link";
import { headerNavs } from "../../config";
import HeaderOrderButton from "../components/HeaderOrderButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (

    <>
    <header className="overflow-x-clip max-w-[100vw]">
      <div className="relative z-20">
        <div className="max-w-[1480px] flex mx-auto px-5 mt-5 justify-between items-center">
          <h2 className="font-bold text-[clamp(1.063rem,0.388rem+1.4vw,1.688rem)] tracking-[0.02em] uppercase text-white">SmartCardio</h2>

          <nav className="flex gap-[29px] items-center py-3 px-[clamp(0.938rem,0.398rem+1.12vw,1.438rem)] border border-white rounded-[29px] md:hidden">
            {headerNavs.map( (headerNav, i) => {
              return (
                <React.Fragment key={i}>
                  {
                    headerNav.path ? <Link href={headerNav.path} className="font-normal text-[clamp(0.813rem,0.692rem+0.6vw,1.25rem)] text-white list-none cursor-pointer">{headerNav.value}</Link>
                    :  <li onClick={headerNav.function} className="font-normal text-[clamp(0.813rem,0.692rem+0.6vw,1.25rem)] text-white list-none cursor-pointer">{headerNav.value}</li>
                  }
                </React.Fragment>
              )
            } )}
          </nav>

          <HeaderBurger isOpen={isMenuOpen} setOpen={setMenuOpen} />
           
          <HeaderOrderButton />
          
        </div>
        
      </div>

      <BurgerLinks setMenuOpen={setMenuOpen} isActive={isMenuOpen} />
      
    </header>
    </>
  );
};

export default React.memo(Header);
