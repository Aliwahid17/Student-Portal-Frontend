import React, { useState } from 'react'
import Image from 'next/image'
import Quiz from '../../public/gcse/quiz.svg'
import Test from '../../public/gcse/test.svg'

const Options = () => {

    const [active, setActive] = useState(false)

    return (


        <div className="flex  py-4  justify-evenly md:justify-center mx-auto items-center">


            <div className="flex-1 mx-4">
                <div onClick={() => setActive(false)} className={`block p-4 w-36 rounded-lg ${active ? 'bg-slate-100' : 'bg-cyan-400'}`} >
                    <div className="flex items-center justify-start ">
                        <Image src={Quiz} alt="Quiz" width={45} height={45} />
                        <span className="ml-[7px] text-md  font-medium text-gray-900"> Quizzes </span>
                    </div>
                </div>
            </div>


            <div className="flex-1 mx-4">
                <div onClick={() => setActive(true)} className={`block p-4 w-36 rounded-lg ${!active ? 'bg-slate-100' : 'bg-cyan-400'}`} >
                    <div className="flex items-center justify-start">
                        <Image src={Test} alt="Quiz" width={45} height={45} />
                        <span className="ml-3 text-md font-medium text-gray-900"> Tests </span>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default Options