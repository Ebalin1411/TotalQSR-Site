import Worktogethericon from "../../public/assets/images/work-together-image.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function WorkTogether() {
  return (
    <>
      <div className="md:px-[50px] md:py-[100px] px-5 py-10 ">
        <div className="tracking-tight flex gap-10 flex-col-reverse lg:flex-row w-full">
          <div className="w-full lg:w-1/2">
            <Image
              src={Worktogethericon}
              alt="Work together"
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-[5%] lg:pt-[10%]">
            <h1 className="text-3xl  md:text-6xl font-bold md:leading-snug">
              Work{" "}
              <span className="bg-[url('/assets/images/yellow-underline-design.svg')] bg-no-repeat bg-bottom bg-contain">
                together
              </span>
            </h1>
            <p className="text-lg my-4 md:my-6">
              With TotalQSR,share your templates and pages with your colleagues
              and collaborate on them
            </p>
            <button className=" flex font-medium items-center text-sm px-2 md:w-[154px] md:h-16 h-10 my-3 bg-light-blue text-white md:text-lg justify-center gap-1 rounded-lg ">
              Contact Us{" "}
              <span>
                <Icon
                  icon="tabler:arrow-right"
                  color="white"
                  className="mt-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
