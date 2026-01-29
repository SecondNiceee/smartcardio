'use client'
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import ResponsePopup from '@/widgets/ResponsePopup/ResponsePopup';
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const DownloadsButtons = () => {
  const [responsePopup, setResponsePopup] = useState<boolean>(false)
  const popupRef = useRef<HTMLFormElement>(null)
  return (
    <>
      <div className="flex justify-between w-full gap-10 md:gap-5 sm:gap-3 sm:flex-col">
        <OrderButton
          externalLink="/videos/iphone_manual.mp4"
          externalProps={{ download: true }}
          className="border border-black bg-transparent w-full scale-hover sm:w-full sm:py-[14px] sm:px-4 cursor-pointer"
        >
          <p className="text-[clamp(0.813rem,0.692rem+0.6vw,1.25rem)] text-black">
            Инструкция для пользователей Apple
          </p>
        </OrderButton>
        <OrderButton
          onClick={() => setResponsePopup(true)}
          className="w-[60%] bg-[#2c0bff] py-5 px-4 scale-hover sm:w-full sm:py-[14px] sm:px-4 cursor-pointer"
        >
          <p className="text-[clamp(0.813rem,0.692rem+0.6vw,1.25rem)]">
            Служба поддержки / отзыв
          </p>
        </OrderButton>
      </div>
      <CSSTransition
        nodeRef={popupRef}
        in={responsePopup}
        timeout={{ enter: 300, exit: 0 }}
        unmountOnExit
        mountOnEnter
      >
        <ResponsePopup setPopup={setResponsePopup} ref={popupRef} />
      </CSSTransition>
    </>
  );
};

export default DownloadsButtons;
