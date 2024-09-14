import React, { ReactNode } from "react";

export default function ImageBGWrapper({children, image, fixed, colorShade}: {children: React.ReactNode, image: string, fixed?:boolean, colorShade?: string}) {
  return (
    <div 
    className={`relative ${fixed && "bg-fixed"} bg-cover min-h-[400px] bg-no-repeat w-full flex items-center justify-center `}
    style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`absolute inset-0 ${colorShade ? colorShade : 'bg-black'} opacity-50`} />
      {children}
    </div>
  );
}
