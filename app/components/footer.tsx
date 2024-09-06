import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-10 text-white ">
            <ContentWrapper className="justify-between">

                    <Link className=" text-[40px]" href={'/'}>Logo</Link>

                <div>
                    <h3 className="text-[30px] !font-[100]">Contact Us</h3>
                    <p>Email: info@johndoe.com</p>
                </div>
                <div className="md:block hidden">
                    <h3 className="text-[30px] !font-[100]">Service Time</h3>
                </div>
                <div className="md:block hidden">
                    <h3 className="text-[30px] !font-[100]">[Section 4]</h3>
                </div>
                
            </ContentWrapper>
        </div>
    )
}
