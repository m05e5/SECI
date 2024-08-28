import React from 'react'

export default function ProgramCard({image, title, shortDesc, fullDesc}: {image: string, title: string, shortDesc: string, fullDesc: string}) {
    return (
        <div 
        className="relative group transition-all duration-500 bg-cover h-[300px] min-w-[300px] bg-no-repeat hover:border  flex items-end  overflow-hidden rounded-md flex-[45%]"
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]" />
          <div className="absolute inset-0 bg-white  w-0 group-hover:w-full  ease-in-out transition-all duration-500" />
          {/* Dark overlay */}
          <div className=" flex flex-col group-hover:text-black text-white  z-10  p-5 ease-in-out transition duration-500 w-[400px]">
            <h3 className="text-[40px]">{title}</h3>
            <p className="leading-loose max-w-[700px] h-[0px] overflow-hidden group-hover:h-[200px] ease-in-out transition-all duration-500 ">
              {shortDesc}
            </p>
          </div>
        </div>
    )
}
