import ContentWrapper from "@/app/components/ContentWrapper";
import HeadImagedWrapper from "@/app/components/shared/HeadImagedWrapper";
import ImageBGWrapper from "@/app/components/shared/ImageBGWrapper";
import { Skeleton } from "@mui/material";

export default function About() {
    return (
        <div>
      <HeadImagedWrapper
        image={"/assets/bg2.png"}
        className="bg-cover  min-h-[500px] bg-no-repeat w-full flex items-end "
      >
        <div className=" flex flex-col gap-3 text-white z-10   p-5">
          <h3 className="text-[40px]"><b>About</b></h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
          </p>
        </div>
      </HeadImagedWrapper>
      
      <ContentWrapper
        className={`w-full flex-col md:flex-row gap-5 py-24 justify-between`}
      >
        <img className="w-full md:w-6/12" src={"/assets/bigcard1.jpg"} alt="content" />
        <div className="w-full md:w-6/12 flex flex-col h-full gap-5">
          <h2 className="text-[35px] !font-[600]">L’amour d’un Dieu fidèle</h2>
          <p className=" ">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. <br/> <br/> Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. <br/> <br/>Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        
      </ContentWrapper>

      <ImageBGWrapper image="/assets/bible3.jpg" >
        <ContentWrapper className="flex-col gap-5 text-white z-10  text-center ">
          
          <i className="text-[25px] ">
            « Car Dieu a tant aimé le monde qu’il a donné son Fils unique afin que quiconque croit en Lui
            ne périsse point mais qu’il ait la vie éternelle. »
          </i>
          <b className="text-[40px]">Jean 3:16</b>
        </ContentWrapper>
      </ImageBGWrapper>
      <ContentWrapper
        className={`w-full flex-col md:flex-row gap-5 py-24 justify-between`}
      >
        
        <div className="w-full md:w-6/12 flex flex-col h-full gap-5">
          <h2 className="text-[35px] !font-[600]">L’amour d’un Dieu fidèle</h2>
          <p className=" ">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. <br/> <br/> Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ. <br/> <br/>Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        <img className="w-full md:w-6/12" src={"/assets/bigcard1.jpg"} alt="content" />
      </ContentWrapper>
    </div>
    )
}
