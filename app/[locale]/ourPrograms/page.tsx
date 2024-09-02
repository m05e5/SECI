import ContentWrapper from "../../components/ContentWrapper";
import ImagedWrapper from "../../components/ImagedWrapper";
import ProgramCard from "../../components/ProgramCard";

export default function page() {
  return (
    <div>
      <ImagedWrapper
        image={"/assets/bg2.png"}
        className="bg-cover  min-h-[500px] bg-no-repeat w-full flex items-end "
      >
        <div className=" flex flex-col gap-3 text-white z-10   p-5">
          <h3 className="text-[40px]">
            <b>Our Programs</b>
          </h3>
          <p className="leading-loose max-w-[700px]  ">
            Our programs serve as the hub for small-group fellowship and
            discipleship. They are dedicated to nurturing and guiding
          </p>
        </div>
      </ImagedWrapper>
      <ContentWrapper className="flex gap-5 my-10 px-5 flex-wrap !max-w-[1100px]">
        <ProgramCard 
            image="/assets/bible_studies.jpg" 
            title="Sunday Services" 
            shortDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship Our programs serve as the hub for small-group fellowship and Our programs"
            fullDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and"
        />
        <ProgramCard 
            image="/assets/bible_studies2.jpg" 
            title="Online Prayers" 
            shortDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship"
            fullDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and"
        />
        <ProgramCard 
            image="/assets/bible3.jpg" 
            title="Weakly bible studies" 
            shortDesc="as the Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship hub for small-group fellowship and"
            fullDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and"
        />
        <ProgramCard 
            image="/assets/youth-worship.jpg" 
            title="Online Prayers" 
            shortDesc=" Our programs serve as the hub for small-group and Our programs serve as the hub for small-group fellowshipOur programs serve as the hub for small-group fellowship and"
            fullDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and"
        />
        <ProgramCard 
            image="/assets/bg_worship.jpg" 
            title="Online Prayers" 
            shortDesc="Our programs serve as the hub for small-group fellowship and"
            fullDesc="Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and Our programs serve as the hub for small-group fellowship and"
        />
      </ContentWrapper>
    </div>
  );
}
