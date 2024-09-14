
export type HomeCardProps = {
    title: string;
    right?: boolean
    description: string;
    image?: string
  }
  
  const HomeCard = ({title, description, right, image}: HomeCardProps) => {
    return (
      <div className={`${right && "md:self-end"} flex flex-col items-center relative group`}>
        <img className="w-[400px] shadow-[0_8px_60px_0_rgba(103,151,255,.31)]  z-[-1] " alt="graduation" src={image}/>
        <div className={`rounded-lg p-5 bg-white  h-fit w-[300px] transition-all duration-500 md:w-[400px] mt-[-50px] md:mt-0  shadow-[0_8px_60px_0_rgba(103,151,255,.11)] md:absolute bottom-[-40px] group-hover:bottom-[-100px] ${ right ? "left-[-40px] group-hover:left-[-100px]" : "right-[-40px] group-hover:right-[-100px]"}`}>
          <h4 className='text-xl lg:text-2xl'>{title}</h4>
          <p className='font-[300] text-md lg:text-lg'>
            {description}
          </p>
        </div>
      </div>
    )
  }
  
  
  export default HomeCard