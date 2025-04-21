import Finance from "../../public/assets/images/finance-icon.svg";
import Collabrate from "../../public/assets/images/collaborate-icon.svg";
import Finworflow from "../../public/assets/images/workflow-icon.svg";
import Export from "../../public/assets/images/export-icon.svg";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="md:px-[50px] md:py-[100px] px-5 py-10  bg-[url('/assets/images/white-waves.svg')] bg-no-repeat bg-top md:bg-center bg-auto lg:bg-contain lg:bg-center">
        <h1 className="text-4xl  md:text-6xl font-bold md:leading-snug text-center">
          Why manage with TotalQSR
        </h1>
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div className="text-center py-5 px-2">
            <Image
              src={Finance}
              alt="Finance Image"
              className="w-28 h-20 m-auto"
            />
            <h4 className="text-2xl font-semibold py-4">Boost productivity</h4>
            <p className="text-xl">
              Create schedule,track time entries and pay roll processing with
              ease
            </p>
          </div>
          <div className="text-center py-5 px-2">
            <Image
              src={Collabrate}
              alt="Collabrate Image"
              className="w-28 h-20 m-auto"
            />
            <h4 className="text-2xl font-semibold py-4">Collaborate</h4>
            <p className="text-xl">
              Share templates and pages with team and get most of your workflow
              processes done
            </p>
          </div>
          <div className="text-center py-5 px-2">
            <Image
              src={Finworflow}
              alt="Finworflow Image"
              className="w-28 h-20 m-auto"
            />
            <h4 className="text-2xl font-semibold py-4">Manage Workflows</h4>
            <p className="text-xl">
              Quickly create and assign workflows to your team and track when
              tasks are done
            </p>
          </div>
          <div className="text-center py-5 px-2">
            <Image src={Export} alt="Export Image" className="m-auto" />
            <h4 className="text-2xl font-semibold py-4 ">Financial Exports</h4>
            <p className="text-xl font-normal">
              Manage financial exports and stay on top of your accounting
              processes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
