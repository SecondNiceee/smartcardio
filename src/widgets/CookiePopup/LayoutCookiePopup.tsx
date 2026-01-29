'use client'
import React, { useEffect, useState } from 'react';
import CookiePopup from './CookiePopup';
import { getCookie } from '@/shared/utils/getCookie';



const LayoutCookiePopup = () => {
    const [cookie, setCookie] = useState<number>(1)
    useEffect( () => {
        const importCookie = async () => {
            console.log(getCookie({name : "isAccepted"}));
            setCookie(getCookie({name : "isAccepted"}))
        }
        importCookie()
    } ) 
    const [isCookieAccepted, setCookieAccepted] = useState<boolean>(false)
    return (
        <>
            { cookie || isCookieAccepted ?  <> </> : <CookiePopup setCookieAccepted={setCookieAccepted} /> }
        </>
    );
};

export default LayoutCookiePopup;