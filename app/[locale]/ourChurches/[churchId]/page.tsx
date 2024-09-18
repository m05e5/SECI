import ContentWrapper from "@/app/components/ContentWrapper";
import React from "react";

export default function page({ params }: { params: { churchId: string } }) {
  const churchLocation = params.churchId;
  return (
    <div>
      <div
        className={`relative bg-cover bg-[url('/assets/bg2.png')] min-h-[500px] bg-no-repeat w-full flex flex-col items-end justify-center p-10`}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <h1 className="text-white font-bold text-[40px] relative">
          Sainte Eglise du Christ International
        </h1>
        <p className="text-[35px] relative font-bold text-[#a4daf0]">
          {churchLocation}
        </p>
      </div>
      <ContentWrapper className="relative !max-w-[1300px] justify-between gap-4">
        <div className="shadow rounded-xl  p-8 min-w-[300px] h-fit flex flex-col gap-5 items-center w-4/12 bg-white  mt-[-80px] left-0">
          <div className=" rounded-full h-[100px] w-[100px] bg-[#747474] " />
          <h2 className=" font-bold text-[24px] text-center relative">
            Sainte Eglise du Christ International
          </h2>

          <div className="w-full">
            <p>+33(0)7 68 13 29 11</p>
            <p>info@{churchLocation}.com</p>
            <p>13 avenue Joffre, Cercle Saint-Martin</p>
            <p>68000 Colmar</p>
            
          </div>
        </div>
        <div className="w-8/12 flex flex-col gap-3 mt-10">
          <div className="flex gap-4">
            <p className="text-justify w-6/12">
              Come experience the joy of belonging to a faith community that
              values community, worship, and purpose. Whether you're exploring
              your faith journey or seeking a place to belong, you'll find a
              warm welcome at Cornerstone. Together, let’s build lives on the
              cornerstone of Jesus Christ. <br /> <br /> Come experience the joy
              of belonging to a faith community that values community, worship,
              and purpose. Whether you're exploring your faith journey or
              seeking a place to belong, you'll find a warm welcome at
              Cornerstone. Together, let’s build lives on the cornerstone of
              Jesus Christ. Come experience the joy of belonging to a faith
              community that values community, worship, and purpose. Whether
              you're exploring your faith journey or seeking a place to belong,
              you'll find a warm welcome at Cornerstone. Together, let’s build
              lives on the cornerstone of Jesus Christ.
            </p>
            <p className="text-justify  w-6/12">
              Come experience the joy of belonging to a faith community that
              values community, worship, and purpose. Whether you're exploring
              your faith journey or seeking a place to belong, you'll find a
              warm welcome at Cornerstone. Together, let’s build lives on the
              cornerstone of Jesus Christ. Come experience the joy
              of belonging to a faith community that values community, worship,
              and purpose. Whether you're exploring your faith journey or
              seeking a place to belong, you'll find a warm welcome at
              Cornerstone. Together, let’s build lives on the cornerstone of
              Jesus Christ. Come experience the joy of belonging to a faith
              community that values community, worship, and purpose. Whether
              you're exploring your faith journey or seeking a place to belong,
              you'll find a warm welcome at Cornerstone. Together, let’s build
              lives on the cornerstone of Jesus Christ.
            </p>
          </div>
          <img className="w-full h-[400px]" src={"/assets/blog.jpg"} alt="content" />
        </div>
      </ContentWrapper>
    </div>
  );
}
