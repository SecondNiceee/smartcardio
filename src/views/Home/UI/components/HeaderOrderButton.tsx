'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const FooterOrderButton = () => {
    return (
    <OrderButton link={routes.store} className='w-[clamp(8.625rem,3.164rem+11.38vw,13.688rem)] gradient-hover sticky top-5 right-5 2xs:hidden'>
        <p className='text-[clamp(1.188rem,0.902rem+1.43vw,2.188rem)]'>Заказать</p>
    </OrderButton>
    );
};

export default FooterOrderButton;
