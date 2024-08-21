import { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "./components/ContentWrapper";

type Props = {
  params: {
    productId: string;
  };
};

export const GenerateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((test) => {
    setTimeout(() => {
      test("test");
    }, 100);
  });
  return { title: `${title}` };
};
export default function Home() {
  return (
    <main className=" flex flex-col gap-5">
      {/* <div className="bg-fill "> */}
      <div className="bg-cover  bg-[url('/assets/bg2.png')] h-[700px] bg-no-repeat w-full  bg-black flex flex-col justify-center   text-white">
        <ContentWrapper className="flex-col max-w-[700px] gap-10">
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
        className={`w-fulljustify-between gap-5 py-24 justify-between`}
      >
        <div className="w-5/12 flex flex-col h-full gap-10">
          <b>We are</b>
          <p className=" leading-loose">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        <img className="w-5/12" src={"/assets/rectangle.jpg"} alt="content" />
      </ContentWrapper>



      <div className="relative bg-fixed bg-cover bg-[url('/assets/bible_studies.jpg')] min-h-[400px] bg-no-repeat w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"/>
        {/* Dark overlay */}
        <div className="relative flex flex-col gap-5 text-white z-10 !font-[100] text-center">
          <h3 className="text-[40px]">JOIN A LIFE GROUP</h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
            individuals within Cornerstone. While most gatherings occur in
            person, we also offer a selection of Zoom sessions for our teens.
          </p>
        </div>
      </div>

      <ContentWrapper
        className={`w-fulljustify-between gap-5 py-10 justify-between`}
      >
        <div className="w-5/12 flex flex-col h-full gap-10">
          <h3 className="text-[30px] !font-[100]">Visit Us</h3>
          <p className=" leading-loose">
            Come experience the joy of belonging to a faith community that
            values community, worship, and purpose. Whether you're exploring
            your faith journey or seeking a place to belong, you'll find a warm
            welcome at Cornerstone. Together, let’s build lives on the
            cornerstone of Jesus Christ.
          </p>
        </div>
        <div className="w-5/12 flex flex-col h-full gap-10">
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
