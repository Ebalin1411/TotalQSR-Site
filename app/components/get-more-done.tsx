import Qsrimage from "../../../total-qsr/public/assets/images/qsr-image.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function GetMoreDone() {
  return (
    <>
      <div className="bg-dark-blue-100 bg-[url('/assets/images/yellow-waves.png')] bg-origin-content bg-no-repeat bg-top md:bg-center bg-auto lg:bg-contain lg:bg-center ">
        <div className="px-5 py-10 tracking-tight md:px-[50px] md:py-[100px] flex gap-10 flex-col lg:flex-row w-full ">
          <div className="w-full lg:w-1/2 dark:text-white">
            <h1 className="text-4xl md:text-6xl font-bold md:leading-snug ">
              Get More Done with TotalQSR
            </h1>
            <p className="text-lg my-5 md:my-6 md:w-[80%] ">
              Software application that enables your teams to collaborate and
              manage everyday and recurring tasks
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
            </button>{" "}
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={Qsrimage} alt="QSR Image" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
