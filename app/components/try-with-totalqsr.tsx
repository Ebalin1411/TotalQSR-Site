import Footer from "./footer";
import { Icon } from '@iconify/react';

export default function TryWithTotalQSR(){
    return(
        <>
        <div className=" bg-dark-blue-100 ">
                <div className="md:px-[50px] md:py-[100px]  px-5 py-10  text-center text-white w-1/2 m-auto">
                    <h1 className='text-4xl md:text-6xl font-bold md:leading-snug'>
                        Want to try TotalQSR today?
                    </h1>
                    <button className='m-auto font-medium flex items-center text-sm px-2 md:w-[162px] md:h-16 h-10 my-3 bg-light-blue text-white md:text-lg justify-center gap-1 rounded-lg '>Contact Us <span><Icon icon="tabler:arrow-right" color="white" className='mt-1' /></span></button>                </div>
                <Footer/>
            </div>
        </>
    );
} 