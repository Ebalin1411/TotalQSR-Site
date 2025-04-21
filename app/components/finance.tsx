import Workflow from '../../public/assets/images/fin-workflow-image.png'
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Finance(){
    return(
        <>
        <div className="md:px-[50px] md:py-[100px] px-5 py-10  bg-Background bg-no-repeat bg-auto bg-top right md:bg-right  ">
                <div className=" tracking-tight  flex gap-10 flex-col-reverse lg:flex-row w-full">
                    <div className="w-full lg:w-1/2">
                        <Image src={Workflow} alt='Finwork in flow' className='w-full'/>
                    </div>
                    <div className="w-full lg:w-1/2" >
                        <h1 className='text-4xl md:text-6xl font-bold md:leading-snug'>
                            Finance & Workflow <span className='bg-Work bg-no-repeat bg-bottom bg-contain'>Management</span>
                        </h1>
                        <p className='text-lg my-5  md:my-6'>Manage your finace exports and customize your process workflows using our simple and effective finance & workflow management modules</p>
                        <button className=' flex font-medium items-center text-sm px-2 md:w-[154px] md:h-16 h-10 my-3 bg-light-blue text-white md:text-lg justify-center gap-1 rounded-lg '>Contact Us <span><Icon icon="tabler:arrow-right" color="white" className='mt-1' /></span></button></div>

                </div>

            </div>
        </>
    );
}