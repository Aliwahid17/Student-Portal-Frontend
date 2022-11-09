import React from 'react'
import front from '../../public/home/homepage.svg'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Top = () => {
    return (
        <div className="bg-[#f4f9ff] py-4 flex justify-center">
            <div className="container pr-3 pl-3  ">
                <div className='pr-2 pl-2 lg:pr-0 lg-pl-0 flex flex-wrap items-center lg:flex-row-reverse flex-col '>
                    <div className='flex flex-2auto w-full lg:w-1/2 justify-center'>
                        <Image src={front} alt='lecture' className='w-full h-auto' priority/>
                    </div>
                    <div className='flex flex-2auto flex-col w-full lg:w-1/2'>
                        <h1 className="text-black text-[36px] md:text-5xl lg:text-6xl mb-4 lg:pl-9 font-bold leading-none">
                            <span className="text-red-600">TheStudentHub</span> Empowering Through Education
                        </h1>
                        <p className="text-lg text-black mb-4 lg:pl-9">Created to support your learning and <br/> help with GCSE and university applications.</p>
                        <Link href='#price' className="text-white w-fit lg:ml-9 text-base md:text-xl font-semibold border px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-800 hover:from-sky-400 hover:to-cyan-500">Join Student Hub <HiOutlineArrowNarrowRight className='inline-flex mb-[2px]' /></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Top