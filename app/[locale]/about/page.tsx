import ImagedWrapper from "@/app/components/ImagedWrapper";

export default function About() {
    return (
        <div>
      <ImagedWrapper
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
      </ImagedWrapper>
    </div>
    )
}
