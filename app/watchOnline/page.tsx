import ContentWrapper from "../components/ContentWrapper";
import ImagedWrapper from "../components/ImagedWrapper";
import BlackButton from "../components/BlackButton";

export default function watchOnline() {
  return (
    <div>
      <ImagedWrapper
        image={"/assets/bg2.png"}
        className="bg-cover  min-h-[500px] bg-no-repeat w-full flex items-end "
      >
        <div className=" flex flex-col gap-3 text-white z-10   p-5">
          <h3 className="text-[40px]">
            <b>Watch Online</b>
          </h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
          </p>
        </div>
      </ImagedWrapper>
      <ContentWrapper className="justify-evenly text-center my-20 ">
        <div className="w-full sm:w-5/12 flex flex-col gap-10 items-center">
          <p className="font-[500] text-gray-700 text-[22px]">LIVE THIS SUNDAY 10:00AM UTC+1</p>
          <BlackButton text="Watch on Facebook" />
        </div>
        <p className="my-auto">OR</p>
        <div className="w-5/12">
          <p className="font-[500] text-gray-700 text-[18px]">
            Join our Zoom meetings from Monday to Saturday at 4:00AM UTC+1 for
            our morning bible study and prayer and every sunday at 7:00PM
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
}
