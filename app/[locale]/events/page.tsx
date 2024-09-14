import HeadImagedWrapper from "../../components/shared/HeadImagedWrapper";

export default function Events() {
  return (
    <div>
      <HeadImagedWrapper
        image={"/assets/bg_worship.jpg"}
        className="bg-cover  min-h-[500px] bg-no-repeat w-full flex items-end "
      >
        <div className=" flex flex-col gap-3 text-white z-10   p-5">
          <h3 className="text-[40px]"><b>Events</b></h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
          </p>
        </div>
      </HeadImagedWrapper>
    </div>
  );
}
