import React, { FC, SetStateAction } from 'react';
import { headerNavs } from '../../config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Link from 'next/link';
import { routes } from '@/shared/config/routes';

interface IBurgerLinks{
    isActive : boolean,
    setMenuOpen : React.Dispatch<SetStateAction<boolean>>
}
const BurgerLinks:FC<IBurgerLinks> = ({isActive, setMenuOpen}) => {
    return (
        <nav className={`absolute bg-white/70 flex items-center justify-center gap-5 flex-col w-[70%] 2xs:w-[80%] xs:w-full p-[25px] rounded-[20px] z-[200] border-2 border-black list-none mt-5 backdrop-blur-[6px] transition-all duration-400 ${isActive ? "left-1/2 -translate-x-1/2" : "left-[-50%] -translate-x-1/2"}`}>
            {headerNavs.map( (headerNav, i) => {
              return (
                <React.Fragment key={i}>
                    {headerNav.path ? (
                      <Link 
                        href={headerNav.path} 
                        className="font-normal text-[20px] text-black list-none cursor-pointer"
                      >
                        {headerNav.value}
                      </Link>
                    ) : (
                      <li 
                        onClick={headerNav.function} 
                        className="font-normal text-[20px] text-black list-none cursor-pointer"
                      >
                        {headerNav.value}
                      </li>
                    )}
                </React.Fragment>
              )
            } )}
            <OrderButton className='hidden 2xs:flex py-[10px] px-[20px]' link={routes.store}>
                <p className='font-bold text-[20px] leading-[143%] text-center text-white'>Заказать</p>
            </OrderButton>
        </nav>
    );
};

export default React.memo(BurgerLinks);
