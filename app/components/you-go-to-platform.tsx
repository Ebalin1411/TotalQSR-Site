import Illustration from '../../public/assets/images/illustration-image.png'
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function YouGoToPlatform(){
    return(
        <>
        <div className="bg-dark-blue-100 md:px-[50px] md:py-[100px] px-5 py-10 ">
                <div className=" tracking-tight flex gap-10 flex-col lg:flex-row w-full">
                    <div className="w-full lg:w-1/2 text-white">
                        <h1 className='text-4xl md:text-6xl font-bold md:leading-snug'>
                            <span className='bg-Work bg-no-repeat bg-bottom bg-contain'>You go to</span> platform
                        </h1>
                        <p className='text-lg my-5 md:my-6'>Worry less about your employees time entries, schedulling and payroll processing and let TotalQSR app  hellp you manage easily and effectively</p>
                        <button className='font-medium flex items-center text-sm px-2 md:w-[154px] md:h-16 h-10 my-3 bg-light-blue text-white md:text-lg justify-center gap-1 rounded-lg '>Contact Us <span><Icon icon="tabler:arrow-right" color="white" className='mt-1 font-medium' /></span></button></div>
                    <div className="w-full lg:w-1/2 relative">
                        <Image src={Illustration} alt='Illustaration Image' className='w-full'/>
                        <span className='w-[290px] h-[290px] bg-[color1] absolute'></span>
                    </div>

                </div>
            </div>
        </>
    );
}