import Link from 'next/link';
import { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Image from 'next/image';
import Auth from './Auth';
import { useAuth } from '../../context/AuthState';
import Physics from '../../public/navbar/physics.svg'
import Chemistry from '../../public/navbar/chemistry.svg'
import Math from '../../public/navbar/math.svg'
import Biology from '../../public/navbar/biology.svg'
import Interview from '../../public/navbar/interview.svg'
import Knowledge from '../../public/navbar/knowledge.svg'
import Statement from '../../public/navbar/statement.svg'
import Book from '../../public/navbar/book.svg'
import Card from '../../public/navbar/card.svg'
import Map from '../../public/navbar/map.svg'
import Blog from '../../public/navbar/blog.svg'
import Seminar from '../../public/navbar/seminar.svg'
import Discord from '../../public/navbar/discord.svg'
import Support from '../../public/navbar/support.svg'

const Navbar = () => {

    const [gcse, setGcse] = useState(false);
    const [medical, setMedical] = useState(false);
    const [store, setStore] = useState(false);
    const [features, setFeatures] = useState(false);

    const { user, logOut, googleSignIn } = useAuth()

    const [navbar, setNavbar] = useState(false);
    const [nav, setNav] = useState(false)

    const userOpen = () => {
        setNavbar(false)
        setNav(!nav)
    }

    const active = () => {
        if (user) {
            if (nav) {
                return true
            } else {
                return false
            }
        }
    }

    return (
        <>

            {/* <!-- component --> */}

            <nav className='sticky top-0'>
                <div className="bg-gray-100 font-sans w-full m-0 ">
                    <div className="bg-white shadow-md ">
                        <div className="container mx-auto px-4 ">
                            <div className="flex items-center justify-between py-4">

                                {/* Logo */}

                                <Link href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-cyan-600 cursor-pointer" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M14.5,16 C14.2238576,16 14,15.7761424 14,15.5 L14,9.5 C14,9.22385763 14.2238576,9 14.5,9 L16,9 C17.1045695,9 18,9.8954305 18,11 C18,11.4116588 17.8756286,11.7942691 17.6624114,12.1123052 C18.4414283,12.3856578 19,13.1275982 19,14 C19,15.1045695 18.1045695,16 17,16 L14.5,16 Z M15,15 L17,15 C17.5522847,15 18,14.5522847 18,14 C18,13.4477153 17.5522847,13 17,13 L15,13 L15,15 Z M15,12 L16,12 C16.5522847,12 17,11.5522847 17,11 C17,10.4477153 16.5522847,10 16,10 L15,10 L15,12 Z M12.9499909,4 L19.5,4 C20.8807119,4 22,5.11928813 22,6.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L13.5,22 C12.2700325,22 11.2475211,21.1117749 11.0389093,19.9417682 C10.8653433,19.9799013 10.6850188,20 10.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L10.5,2 C11.709479,2 12.7183558,2.85887984 12.9499909,4 Z M13,5 L13,17.5 C13,18.3179089 12.6072234,19.0440799 12,19.5001831 C12.0000989,20.3285261 12.6716339,21 13.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L13,5 Z M8.56005566,11.4964303 C8.54036595,11.4987873 8.52032459,11.5 8.5,11.5 L6.5,11.5 C6.47967541,11.5 6.45963405,11.4987873 6.43994434,11.4964303 L5.96423835,12.6856953 C5.86168164,12.9420871 5.57069642,13.066795 5.31430466,12.9642383 C5.0579129,12.8616816 4.93320495,12.5706964 5.03576165,12.3143047 L7.03576165,7.31430466 C7.20339081,6.89523178 7.79660919,6.89523178 7.96423835,7.31430466 L9.96423835,12.3143047 C10.066795,12.5706964 9.9420871,12.8616816 9.68569534,12.9642383 C9.42930358,13.066795 9.13831836,12.9420871 9.03576165,12.6856953 L8.56005566,11.4964303 Z M8.16148352,10.5 L7.5,8.8462912 L6.83851648,10.5 L8.16148352,10.5 Z M10.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L10.5,19 C11.3284271,19 12,18.3284271 12,17.5 L12,4.5 C12,3.67157288 11.3284271,3 10.5,3 Z M6.5,18 C6.22385763,18 6,17.7761424 6,17.5 C6,17.2238576 6.22385763,17 6.5,17 L8.5,17 C8.77614237,17 9,17.2238576 9,17.5 C9,17.7761424 8.77614237,18 8.5,18 L6.5,18 Z M15.5,20 C15.2238576,20 15,19.7761424 15,19.5 C15,19.2238576 15.2238576,19 15.5,19 L17.5,19 C17.7761424,19 18,19.2238576 18,19.5 C18,19.7761424 17.7761424,20 17.5,20 L15.5,20 Z" />
                                    </svg>
                                </Link>

                                {/* Menu Item */}

                                <div className="hidden lg:flex sm:items-center">

                                    {/* GCSE  */}

                                    <div className="group relative">
                                        <div className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8 ">GCSE <BsFillCaretDownFill className='inline-flex hover:animate-animation-bounce' />
                                            <div className="absolute z-10 hidden bg-white pt-[26px] group-hover:block w-[772px]  -left-16">
                                                <div className="top-32 border-t-2 border-t-cyan-400 bg-slate-50 px-2 pt-4 pb-2 shadow-lg rounded-b-md ">
                                                    <div className="grid py-2  mx-auto max-w-screen-xl text-gray-900   grid-cols-5   px-6">
                                                        <ul className='w-[739px] justify-between flex container ml-[-17px]'>

                                                            {/* Physics  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href={'/gcse/physics'}>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Physics} />
                                                                        <div className="font-semibold pr-[30px] text-center text-black ">Physics</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Chemistry  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href={'/gcse/chemistry'}>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Chemistry} />
                                                                        <div className="font-semibold pr-4 text-center text-black ">Chemistry</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Biology  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href={'/gcse/biology'}>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Biology} />
                                                                        <div className="font-semibold pr-[30px] text-center text-black ">Biology</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Mathematics  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  '>
                                                                <Link href={'/gcse/math'}>
                                                                    <div className="flex  cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Math} />
                                                                        <div className="font-semibold mr-[0.4rem] text-center text-black ">Mathematics</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Medical Application  */}

                                    <div className="group relative">
                                        <div className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8 ">Medical Application <BsFillCaretDownFill className='inline-flex hover:animate-animation-bounce' />
                                            <div className={"absolute z-10 hidden bg-white pt-[26px] group-hover:block w-[575px] -left-16"}>
                                                <div className="top-32 border-t-2 border-t-cyan-400 bg-slate-50 px-2 pt-4 pb-2 shadow-lg rounded-b-md ">
                                                    <div className="grid py-2  mx-auto max-w-screen-xl text-gray-900 dark:text-white  grid-cols-3   px-6">
                                                        <ul className='w-[540px] justify-between flex container ml-[-17px]'>

                                                            {/* UCAT  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/medical/ucat'>
                                                                    <div className="flex  cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Knowledge} />
                                                                        <div className="font-semibold pr-8 text-center text-black ">UCAT</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Interviews  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/medical/interview'>
                                                                    <div className="flex  cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Interview} />
                                                                        <div className="font-semibold pr-[15px] text-center text-black ">Interviews</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Personal Statement  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  '>
                                                                <Link href='/medical/personal'>
                                                                    <div className="flex  cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                    {/* <div className="flex  cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400"> */}
                                                                        <Image height={"45px"} width={"45px"} src={Statement} />
                                                                        <div className="font-semibold text-center w-[96px] text-black ">Personal Statement</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Store  */}

                                    <div className="group relative">
                                        <div className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8 ">Store <BsFillCaretDownFill className='inline-flex hover:animate-animation-bounce' />
                                            <div className={"absolute z-10 hidden bg-white pt-[26px] group-hover:block w-[575px] -left-16"}>
                                                <div className="top-32 border-t-2 border-t-cyan-400 bg-slate-50 px-2 pt-4 pb-2 shadow-lg rounded-b-md ">
                                                    <div className="grid py-2  mx-auto max-w-screen-xl text-gray-900 dark:text-white  grid-cols-3   px-6">
                                                        <ul className='w-[540px] justify-between flex container ml-[-17px]'>

                                                            {/* Ebooks  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/store/ebook'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Book} />
                                                                        <div className="font-semibold  text-center w-24 text-black ">E-Books</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Flash Cards  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/store/flashcard'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Card} />
                                                                        <div className="font-semibold  w-[92px] text-center text-black ">Flash Cards</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Mind Maps  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  '>
                                                                <Link href='/store/mindmap'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Map} />
                                                                        <div className="font-semibold pr-[11px] text-center text-black ">Mind Maps</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}

                                    <div className="group relative">
                                        <div className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8 ">Features <BsFillCaretDownFill className='inline-flex hover:animate-animation-bounce' />
                                            <div className={"absolute z-10 hidden bg-white pt-[26px] group-hover:block w-[772px]  -left-56"}>
                                                <div className="top-32 border-t-2 border-t-cyan-400 bg-slate-50 px-2 pt-4 pb-2 shadow-lg rounded-b-md ">
                                                    <div className="grid py-2  mx-auto max-w-screen-xl text-gray-900 dark:text-white  grid-cols-5   px-6">
                                                        <ul className='w-[739px] justify-between flex container ml-[-17px]'>

                                                            {/* Blogs  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/features/blogs'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Blog} />
                                                                        <div className="font-semibold pr-[33px] text-center text-black ">Blogs</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Live Seminars  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/features/seminars'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Seminar} />
                                                                        <div className="font-semibold pr-[2px] text-center text-black ">Live Seminars</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Discord Community   */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                                <Link href='/features/community'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Discord} />
                                                                        <div className="font-semibold pr-[10px] text-center text-black ">Community</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                            {/* Support  */}

                                                            <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  '>
                                                                <Link href='/features/support'>
                                                                    <div className="flex cursor-pointer justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_13rem_0_0_0]   hover:shadow-cyan-400">
                                                                        <Image height={"45px"} width={"45px"} src={Support} />
                                                                        <div className="font-semibold pr-[23px] text-center text-black ">Support</div>
                                                                    </div>
                                                                </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/price" ><a className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8">Pricing</a></Link>
                                    <Link href="/about" ><a className="text-gray-800 text-sm font-semibold hover:text-cyan-600 mr-8">About Us</a></Link>

                                </div>

                                {/* SignUp and LogIn Link For medium Screen */}

                                <div className="hidden  lg:flex sm:items-center ">
                                    <Auth />
                                </div>

                                {/* Menu options Button ,Login and signup in moblie screen */}

                                <div className="lg:hidden cursor-pointer flex">

                                    {
                                        user ?
                                            (


                                                <button className="flex  justify-center items-center w-10 h-10" onClick={() => userOpen()} >
                                                    {user.photoURL && <Image className='rounded-full' src={user.photoURL} width={35} height={35} />}
                                                </button>

                                            ) :
                                            (
                                                <>
                                                    <button className="text-white text-sm font-semibold border px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-800 hover:from-sky-400 hover:to-cyan-500" onClick={() => googleSignIn()} >Sign In</button>
                                                </>
                                            )
                                    }

                                    <button className={'p-2 text-gray-700 rounded-md outline-none'} onClick={() => setNavbar(!navbar)}>

                                        {navbar ? (

                                            <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-door-open animate-animation-bounce">
                                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                                            </svg>
                                        ) : (
                                            <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-door-closed animate-animation-bounce">
                                                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                                                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                                            </svg>

                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* Mobile Navbar  */}

                            <div className={`block bg-white border-t-2 py-2 lg:hidden ${navbar ? "block" : "hidden"}`}>

                                <div className="flex flex-col ">

                                    {/*  GCSE  */}

                                    <div onClick={() => setGcse(!gcse)} className={`text-gray-800 text-sm font-semibold  bg-white mb-2 ${gcse ? "" : "border-b-2 border-b-cyan-400"} `}>

                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>

                                            <div className='ml-4  flex mr-4 w-full '>
                                                GCSE
                                            </div>

                                            <div className='mr-[29px]'>
                                                <BsFillCaretDownFill className={`inline-flex duration-500 ease-in-out transition-all ${!gcse ? "rotate-0 delay-100" : "rotate-180"}`} />
                                            </div>

                                        </div>

                                        {/* Physics   */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!gcse ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/gcse/physics'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Physics} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Physics</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>

                                        {/* Chemistry  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!gcse ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/gcse/chemistry'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Chemistry} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Chemistry</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Biology  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!gcse ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/gcse/biology'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Biology} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Biology</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Mathematics  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!gcse ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/gcse/math'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Math} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Mathematics</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    {/* Medical Application  */}

                                    <div onClick={() => setMedical(!medical)} className={`text-gray-800 text-sm font-semibold  bg-white mb-2 ${medical ? "" : "border-b-2 border-b-cyan-400"} `}>

                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>
                                            <div className='ml-4  flex mr-4 w-full '>
                                                Medical Application
                                            </div>
                                            <div className='mr-[29px]'>
                                                <BsFillCaretDownFill className={`inline-flex duration-500 ease-in-out transition-all ${!medical ? "rotate-0 delay-100" : "rotate-180"}`} />
                                            </div>

                                        </div>

                                        {/* UCAT   */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!medical ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/medical/ucat'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Knowledge} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">UCAT</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Interviews   */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!medical ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/medical/interview'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Interview} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Interviews</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Personal Statement  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!medical ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/medical/personal'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Statement} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Personal Statement</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    {/* Store  */}

                                    <div onClick={() => setStore(!store)} className={`text-gray-800 text-sm font-semibold  bg-white mb-2 ${store ? "" : "border-b-2 border-b-cyan-400"} `}>

                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>
                                            <div className='ml-4  flex mr-4 w-full '>
                                                Store
                                            </div>
                                            <div className='mr-[29px]'>
                                                <BsFillCaretDownFill className={`inline-flex duration-500 ease-in-out transition-all ${!store ? "rotate-0 delay-100" : "rotate-180"}`} />
                                            </div>
                                        </div>

                                        {/* Ebooks    */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!store ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/store/ebook'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Book} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Ebooks</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Flash Cards    */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!store ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/store/flashcard'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Card} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Flash Cards</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Mind Maps   */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!store ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/store/mindmap'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Map} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Mind Maps</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    {/* Features */}

                                    <div onClick={() => setFeatures(!features)} className={`text-gray-800 text-sm font-semibold  bg-white mb-2 ${features ? "" : "border-b-2 border-b-cyan-400"} `}>

                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>
                                            <div className='ml-4  flex mr-4 w-full '>
                                                Features
                                            </div>
                                            <div className='mr-[29px]'>
                                                <BsFillCaretDownFill className={`inline-flex duration-500 ease-in-out transition-all ${!features ? "rotate-0 delay-100" : "rotate-180"}`} />
                                            </div>
                                        </div>

                                        {/* Blogs  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!features ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/features/blogs'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Blog} />
                                                            <div className="font-semibold  text-center  w-[83%] text-black ">Blogs</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Live Seminars  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!features ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/features/seminars'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Seminar} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Live Seminars</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Discord Community   */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!features ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/features/community'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Discord} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Discord Community</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Support  */}

                                        <div className={`flex bg-white mt-2 mb-2 ml-4 ${!features ? "hidden" : "block "}`} >
                                            <ul className='w-[340px] grow ml-0 mt-1 mb-1 justify-between flex container '>
                                                <li className='container  border-b-2 border-b-cyan-400 hover:border-b-0  mr-5'>
                                                    <Link href='/features/support'>
                                                        <div className="flex cursor-pointer md:justify-around  justify-between items-center p-3 rounded-lg   transition ease-in-out delay-100 bg-sky-50 hover:-translate-y-1 hover:scale-110   hover:shadow-[inset_45rem_0_0_0]   hover:shadow-cyan-400">
                                                            <Image height={"45px"} width={"45px"} src={Support} />
                                                            <div className="font-semibold  text-center w-[83%] text-black ">Support</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    {/* Pricing  */}

                                    <div className={`text-gray-800 text-sm font-semibold  bg-white mb-2  border-b-2 border-b-cyan-400 `}>
                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>
                                            <Link href='/price'>
                                                <div className='ml-4 cursor-pointer flex mr-4 w-full '>
                                                    Pricing
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* About Us  */}

                                    <div className="text-gray-800 text-sm font-semibold  bg-white">
                                        <div className='-ml-4 -mr-4 hover:bg-gray-100 flex items-center h-16 '>
                                            <Link href='/about'>
                                                <div className='ml-4 cursor-pointer flex mr-4 w-full '>
                                                    About Us
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className={`block bg-white border-t-2 py-2 lg:hidden ${active() ? "block" : "hidden"}`}>
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

                                <hr className=" border-gray-200 dark:border-cyan-400 " />


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
            </nav>

        </>

    )
}

export default Navbar
