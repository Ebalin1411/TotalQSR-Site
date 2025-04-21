import Logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <>
      <div className="flex px-5 md:px-[50px] justify-between align-[center] bg-dark-blue-500">
        <Image src={Logo} alt="logo" className="w-[130px] md:w-[180px]"></Image>
        <button className=" flex font-medium items-center text-sm px-2 md:w-[154px] md:h-16 h-10 my-3 bg-light-blue text-white md:text-lg justify-center gap-1 rounded-lg ">
          Contact Us{" "}
          <span>
            <Icon
              icon="tabler:arrow-right"
              color="white"
              className="mt-1 font-medium"
            />
          </span>
        </button>
      </div>
    </>
  );
}
