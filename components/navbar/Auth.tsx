import React from 'react'
import { useAuth } from '../../context/AuthState';
import Image from 'next/image';
import Link from 'next/link';
const Auth = () => {

    const { user, logOut, googleSignIn } = useAuth()

    return (
        <>


            {
                user ?
                    (
                        <>
                            <div className="hidden lg:flex sm:items-center">
                                <div className="group relative">
                                    <div className="flex  justify-center items-center w-10 h-10">
                                        {user.photoURL && <Image className='rounded-full' src={user.photoURL} width={35} height={35} alt='user' />}
                                    </div>

                                    <div className="absolute z-10 hidden bg-white pt-[16px] group-hover:block w-[185px] -left-[130px] ">
                                        <div className="top-32 border-t-2 border-t-cyan-400 bg-slate-50 px-2 pt-2 pb-2 shadow-lg rounded-b-md ">
                                            <Link href='#'>
                                                <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100  ">
                                                    <svg className="w-5 h-5 mx-1 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                                                        <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
                                                    </svg>

                                                    <span className="mx-1">
                                                        view profile
                                                    </span>
                                                </div>
                                            </Link>
                                            <hr className="border-gray-200 dark:border-cyan-400 " />
                                            <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 ">
                                                <button className='flex' onClick={() => logOut()}>
                                                    <svg className="w-5 h-5 mx-1 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                                    </svg>

                                                    <span className="mx-1">
                                                        Sign Out
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ) :
                    (
                        (
                            <>
                                <button className="text-white text-sm font-semibold border px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-800 hover:from-sky-400 hover:to-cyan-500" onClick={() => googleSignIn()}  >Sign In</button>
                            </>
                        )
                    )
            }
        </>
    )
}

export default Auth