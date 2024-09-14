"use client";
import ContentWrapper from "../../components/ContentWrapper";
import HeadImagedWrapper from "../../components/shared/HeadImagedWrapper";
// import { APIProvider } from "@vis.gl/react-google-maps";
import { Facebook, WhatsApp } from "@mui/icons-material";
import BlackButton from "@/app/components/BlackButton";

export default function Contact() {
  return (
    <div className=" flex flex-col gap-8">
      <HeadImagedWrapper
        image={"/assets/biblebg.jpg"}
        className="bg-cover  min-h-[500px] bg-no-repeat w-full flex items-end "
      >
        <div className=" flex flex-col gap-3 text-white z-10   p-5">
          <h3 className="text-[40px]">
            <b>Contact Us</b>
          </h3>
          <p className="leading-loose max-w-[700px]  ">
            Lorem Ipsu In publishing and graphic design, Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying
          </p>
        </div>
      </HeadImagedWrapper>

      <ContentWrapper className="border-b flex-col md:flex-row border-gray-900/10 py-12 gap-5">
        <div className="w-full md:w-4/12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Text text text
          </h2>
          <div className="mt-1 text-sm leading-6 text-gray-600 flex flex-col gap-3">
          <p className="">
            Lorem Ipsu In publishing and graphic design, Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual form

            </p>
            <p> you can also contact us directly on</p>
            <div className="border rounded flex gap-3 items-center p-2 bg-[#dbdfe6b5] font-bold">
              <WhatsApp className="text-green-600"/>
              +237 6777777777
            </div>
            <div className="border rounded flex gap-3 items-center p-2 bg-[#dbdfe6b5] font-bold">
              <Facebook className="text-blue-400"/>
              SECI
            </div>
          </div>


          
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-8 w-full md:w-8/12">
          <div className="flex-1 sm:flex-[0_0_47%]">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex-1 sm:flex-[0_0_48%]">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-full ">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>







          <div className="w-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Tell us whats your concern
            </p>
          </div>
          <BlackButton widthFull text="Send Message" />
        </div>
      </ContentWrapper>
    </div>
  );
}
