import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}


export const GenerateMetaData = async ( {params}: Props ): Promise<Metadata> => {

  const title = await new Promise(test => {
    setTimeout(() => {
      test("test")
    }, 100);
  })
  return {title: `${title}`}
}
export default function Home() {
  return (
   <main className="">
    {/* <div className="bg-fill "> */}
    <div className="bg-cover  bg-[url('/assets/bg2.png')] h-[700px] bg-no-repeat w-full "> 
hi
    </div>
   </main>
  );
}


