"use client";
import ContentWrapper from "../components/ContentWrapper";
import { useTranslations } from "use-intl";
import HomeCard from "../components/HomeCard";
import ImageBGWrapper from "../components/shared/ImageBGWrapper";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className=" flex flex-col gap-5">
      {/* <div className="bg-fill "> */}
      <div className="bg-cover  bg-[url('/assets/bg2.png')] h-[700px] bg-no-repeat w-full  bg-black flex flex-col justify-center   text-white">
        <ContentWrapper className="flex-col max-w-[700px] gap-10 ">
          <h1 className="text-[50px]">
            We are one in <span className="font-bold">Jesus</span> name
          </h1>
          <p>
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </ContentWrapper>
      </div>

      <ContentWrapper
        className={`w-full flex-col md:flex-row gap-5 py-24 justify-between`}
      >
        <div className="w-full md:w-5/12 flex flex-col h-full gap-10">
          <b>We are</b>
          <p className=" leading-loose">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        <img
          className="w-full md:w-5/12"
          src={"/assets/rectangle.jpg"}
          alt="content"
        />
      </ContentWrapper>
      
      <ImageBGWrapper image="/assets/bible_studies.jpg" fixed>
        <div className=" flex flex-col gap-5 text-white z-10 !font-[100] text-center ">
          <h3 className="text-[40px]">JOIN A LIFE GROUP</h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
            individuals within Cornerstone. While most gatherings occur in
            person, we also offer a selection of Zoom sessions for our teens.
          </p>
        </div>
      </ImageBGWrapper>

      <ContentWrapper className="flex flex-col items-center md:items-start gap-5 md:gap-[50px] !max-w-[1350px]  w-full my-10 mb-[100px]">
        <h2 className="text-center w-full text-[40px] !font-[100]">
          {" "}
          Some of our events{" "}
        </h2>
        {/* <img src={'https://s3.amazonaws.com/primuslearning.prod/resources/images/waveOrange.png'} alt='square' className='absolute top-36 right-10 w-[150px] h-auto' /> */}
        <HomeCard
          title="Text text text"
          image="/assets/rectangle.jpg"
          description="individuals within Cornerstone. While most gatherings occur in
              person, we also offer a selection of Zoom sessions for our teens."
        />
        <HomeCard
          right
          title="Text text text"
          image="/assets/rectangle.jpg"
          description="individuals within Cornerstone. While most gatherings occur in
              person, we also offer a selection of Zoom sessions for our teens."
        />
        <HomeCard
          title="Text text text"
          image="/assets/rectangle.jpg"
          description="individuals within Cornerstone. While most gatherings occur in
              person, we also offer a selection of Zoom sessions for our teens."
        />
      </ContentWrapper>

      <ContentWrapper
        className={`w-full flex-col md:flex-row gap-5 py-10 justify-between`}
      >
        <div className="w-full md:w-5/12 flex flex-col h-full gap-10">
          <h3 className="text-[30px] !font-[100]">Visit Us</h3>
          <p className=" leading-loose">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex flex-col h-full gap-10">
          <b>We are</b>
          <p className=" leading-loose">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
      </ContentWrapper>
    </main>
  );
}
