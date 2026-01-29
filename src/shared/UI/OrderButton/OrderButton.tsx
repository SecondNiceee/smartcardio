"use client";

import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type TypeAProps = JSX.IntrinsicElements["a"]

interface IOrderButton {
  children: ReactNode;
  onClick?: () => void;
  styles?: CSSProperties;
  className?: string;
  link?: string;
  externalLink?: string;
  externalProps?: TypeAProps
}

const baseStyles = "rounded-[10px] bg-[#b200ff] flex items-center justify-center py-[13px] [&>p:first-of-type]:font-semibold [&>p:first-of-type]:text-[clamp(0.813rem,0.639rem+0.77vw,1.188rem)] [&>p:first-of-type]:leading-[143%] [&>p:first-of-type]:text-center [&>p:first-of-type]:text-white";

function OrderButton({
  onClick,
  styles = {},
  children,
  className = "",
  link,
  externalLink,
  externalProps = {}
}: IOrderButton) {
  return (
    <>
      {link ? (
        <Link
          className={`${baseStyles} ${className}`}
          style={styles}
          href={link}
        >
          {children}
        </Link>
      ) : externalLink ? (
        <a
          {...externalProps}
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${className}`}
          style={styles}
          href={externalLink}
        >
          {children}
        </a>
      ) : (
        <button
          style={styles}
          onClick={onClick}
          onPointerDown={onClick}
          className={`${baseStyles} ${className}`}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default React.memo(OrderButton);
