'use client'
import React, { useEffect, useState } from 'react';
import { ScrollArrow } from './ScrollArrow';

const SmartcardioScrollArrow = () => {
  const [scrollToDownloads, setScrollToDownloads] = useState(() => () => {});

  useEffect(() => {
    const importScrollToDownloads = async () => {
      const { scrollToDownloads } = await import('../../utils/scrollToDownloads');
      setScrollToDownloads(() => scrollToDownloads);
    };
    importScrollToDownloads();
  }, []);

  return (
    <ScrollArrow
      onClick={scrollToDownloads}
      className="animate-up-down mt-[90px] md:hidden"
    />
  );
};

export default SmartcardioScrollArrow;
