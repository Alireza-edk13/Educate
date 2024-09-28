import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import { FaRegClock } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { SiLevelsdotfyi } from "react-icons/si";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import Button from '../../Components/Button/Button';
import { FaCheck } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from 'react-router-dom';
import Accordion from '../../Components/Accordion/Accordion';
import useToast from '../../Components/Toast/Toast';
import { useGetCourseDetails, useRegisterToCourse } from '../../hooks/useCourse';
import Loading from '../../Components/Loading/Loading';



export default function CourseDetail() {



    const [toggleState, setToggleState] = useState(1)
    const [comments, setComments] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [courseDetails, setCourseDetails] = useState({});
    const [categoryID, setCategoryID] = useState([]);
    const [creator, setCreator] = useState([])
    const showToast = useToast()


    const { courseName } = useParams();

    const [showInfo, setShowInfo] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)

    const toggleShowInfoHandler = () => {
        setShowInfo(prevShowInfo => !prevShowInfo)
    }
    const toggleTab = (index) => {
        setToggleState(index)
    }

    const { data: courseInfo, isSuccess, isError, error, isLoading } = useGetCourseDetails(courseName)

    useEffect(() => {
        if (isSuccess) {
            setComments(courseInfo.comments);
            setSessions(courseInfo.sessions);
            setCourseDetails(courseInfo);
            setCreatedAt(courseInfo.createdAt);
            setUpdatedAt(courseInfo.updatedAt);
            setCategoryID(courseInfo.categoryID)
            setCreator(courseInfo.creator)
        }
    }, [isSuccess, courseInfo])




    const { mutateAsync: addCourse } = useRegisterToCourse(courseName)

    const registerInCourse = async (course) => {
        if (JSON.parse(localStorage.getItem("user"))) {
            addCourse(course)
        } else {
            showToast("You Should Sign up First", "error")
        }
    }



    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
            <Header />
            <PageTitleBanner title='Course Detail' />
            <section className=' mb-32 py-16'>
                <div className="container">
                    {/* top section */}
                    <div className="grid grid-cols-1 gap-8 xl:gap-0 xl:grid-cols-2">
                        {/* left side */}
                        <div className=' space-y-6 relative'>
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-baseline'>
                                {/* teacher box */}
                                <div className=' mainBoxShadow relative left-10 max-w-48 sm:max-w-56 py-1 sm:py-3 sm:pl-8 sm:pr-6 bg-mainWhite text-center sm:text-left rounded-2xl'>
                                    <h6 className="ml-1 mb-1 font-InterSB">{creator.name}</h6>
                                    <p className='ml-1  text-mainGray'>{courseDetails.description}</p>
                                    <img className=' absolute max-w-[55px] sm:max-w-full rounded-full border-[3px] border-main left-[-50px] top-0 sm:top-[-5px]'
                                        src={`
                                
                                        ${creator.name === "Emma Mitchell" && '/images/courses/teachers/a-1.webp'
                                            ||
                                            creator.name === "Ava Johnson" && '/images/courses/teachers/a-3.webp'
                                            ||
                                            creator.name === "Benny Martin" && '/images/courses/teachers/a-4.webp'
                                            ||
                                            creator.name === "Miller Noah" && '/images/courses/teachers/a-6.webp'
                                            }
                                        
                                        `}

                                        alt="info" />
                                </div>
                                <div>
                                    <p className=' text-mainGray'>Published Date</p>
                                    <span>{createdAt.slice(0, 10)}</span>
                                </div>
                            </div>
                            <h2 className=' text-3xl sm:text-4xl md:text-5xl !leading-[125%] tracking-wider'>Mastering <span className='text-main'>{courseDetails.name}</span>: Advanced Techniques and Creative Mastery</h2>
                            <p className=' text-mainGray'>
                                Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis vestibulum enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante.
                            </p>
                            <p className=' text-mainGray'>
                                Dignissim urna urna eget ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare fames nisl maecenas nibh at ipsum. Amet in mauris consectetur placerat nullam non risus vel sit.
                            </p>
                            <img className=' size-20 sm:size-auto -top-16 right-0  lg:-right-16 z-10 absolute' src={`https://educate-api.vercel.app/courses/covers/${courseDetails.cover}`} alt="" />
                        </div>
                        {/* right side */}
                        <div className=' relative'>
                            <img className=' rounded-xl h-full' src="/images/course-detail.webp" alt="corse-pic" />
                        </div>

                    </div>
                    {/* mid section */}
                    <div className=" flex md:flex-row flex-col justify-between items-center rounded-xl py-5 mb-16 mt-12 px-6 bg-mainWhite mainBoxShadow ">
                        <div className=' grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-8'>
                            <div>
                                <p className=' text-mainGray'>Category</p>
                                <h6 className=' flex items-center'><BiSolidCategoryAlt className=' text-2xl text-main' />{categoryID.title}</h6>
                            </div>
                            <div>
                                <p className=' text-mainGray'>Difficulty</p>
                                <h6 className=' flex items-center'><SiLevelsdotfyi className=' pr-2 text-2xl text-main' />Advanced</h6>
                            </div>
                            <div>
                                <p className=' text-mainGray'>Videos</p>
                                <h6 className=' flex items-center'><GoVideo className=' pr-2 text-2xl text-main' />{sessions?.length} Videos</h6>
                            </div>
                            <div>
                                <p className=' text-mainGray'>Time</p>
                                <h6 className=' flex items-center'><FaRegClock className=' pr-2 text-2xl text-main' />+ 5 Hours</h6>
                            </div>
                            <div>
                                <p className=' text-mainGray'>Support</p>
                                <h6 className=' flex items-center'><MdAssignment className=' pr-2 text-2xl text-main' />{courseDetails.support}</h6>
                            </div>
                        </div>
                        <div className=' flex justify-between items-center flex-wrap gap-4 xl:gap-16 md:pl-16 md:border-l border-lightGray md:mt-0 mt-4'>
                            <h4 className=' md:font-semibold text-3xl md:text-4xl'>$45</h4>
                            {
                                courseDetails.isUserRegisteredToThisCourse ?
                                    <button onClick={() => toggleTab(2)} className='py-3.5 bg-green-500 px-3.5 btn' type="button"><span className='btn_curve'></span>
                                        Watch Course</button>
                                    :
                                    <button onClick={() => setConfirmModal(true)} className='py-3.5 px-3.5 btn' type="button"><span className='btn_curve'></span>
                                        Buy Course</button>


                            }
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="grid grid-cols-12">
                        <div className=' col-span-12 md:col-span-3'>
                            <ul className="flex flex-row mb-8 text-xl md:text-[27px] md:mb-0 md:flex-col gap-6 sm:gap-8 flex-wrap">
                                <li>
                                    <button onClick={() => toggleTab(1)} type="button" className={`outline-none bg-transparent transition-all duration-[0.5s] hover:text-main ${toggleState === 1 ? 'border-l-4 border-main pl-3' : ' border-none p-0'}`}>Overview</button>
                                </li>
                                <li>
                                    <button onClick={() => toggleTab(2)} type="button" className={`outline-none bg-transparent transition-all duration-[0.5s] hover:text-main ${toggleState === 2 ? 'border-l-4 border-main pl-3' : ' border-none p-0'}`}>Curriculum</button>
                                </li>
                                <li>
                                    <button onClick={() => toggleTab(3)} type="button" className={`outline-none bg-transparent transition-all duration-[0.5s] hover:text-main ${toggleState === 3 ? 'border-l-4 border-main pl-3' : ' border-none p-0'}`}>Reviews</button>
                                </li>
                                <li>
                                    <button onClick={() => toggleTab(4)} type="button" className={`outline-none bg-transparent transition-all duration-[0.5s] hover:text-main ${toggleState === 4 ? 'border-l-4 border-main pl-3' : ' border-none p-0'}`}>Instructor</button>
                                </li>

                            </ul>
                        </div>
                        <div className=' col-span-12 md:col-span-9'>
                            {/* overview */}
                            <div className={`${toggleState === 1 ? 'block' : ' hidden'} text-mainGray`}>
                                <p className=' mb-8'>
                                    Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero
                                    tortor nunc mattis vestibulum enim. Faucibus neque sagittis amet lectus nec magna
                                    sollicitudin cras ante. Dignissim urna urna eget ipsum lorem mattis quis dictum. At
                                    nunc turpis ullamcorper ac massa eu. Id ornare fames nisl maecenas nibh at ipsum.
                                    Amet in mauris consectetur placerat nullam non risus vel sit. Proin lacinia purus et
                                    morbi penatibus vestibulum pretium. Lorem ultricies dictumst aliquet pellentesque
                                    neque sed. Tempor mi et ac consequat placerat massa phasellus diam tellus. Eget
                                    egestas lorem eget elit aliquam lectus in eleifend. Rhoncus faucibus adipiscing
                                    turpis risus dictum habitasse.
                                </p>
                                <ul className=' space-y-4'>
                                    <li className=' flex items-center gap-2'>
                                        <FaCheck className=' text-xl text-mainWhite bg-main p-1 rounded-full mainBoxShadow' />
                                        Lorem ipsum dolor sit amet consectetur.
                                    </li>
                                    <li className=' flex items-center gap-2'>
                                        <FaCheck className=' text-xl text-mainWhite bg-main p-1 rounded-full mainBoxShadow' />
                                        Lorem ipsum dolor sit amet consectetur.
                                    </li>
                                    <li className=' flex items-center gap-2'>
                                        <FaCheck className=' text-xl text-mainWhite bg-main p-1 rounded-full mainBoxShadow' />
                                        Lorem ipsum dolor sit amet consectetur.
                                    </li>
                                </ul>
                            </div>
                            {/* Instructor */}
                            <div className={`${toggleState === 4 ? 'block' : ' hidden'} space-y-4`}>
                                {/* teacher box */}
                                <div className=' relative left-10 max-w-48 sm:max-w-56 py-1 pl-2 sm:py-3 sm:pl-8 sm:pr-6 bg-transparent text-left rounded-2xl'>
                                    <h6 className="ml-1 mb-1 font-InterSB">{creator.name}</h6>
                                    <p className='ml-1  text-mainGray'>{courseDetails.description}</p>
                                    <img className=' absolute max-w-[55px] sm:max-w-full rounded-full border-[3px] border-main left-[-50px] top-0 sm:top-[-5px]'
                                        src={`
                                
                                        ${creator.name === "Emma Mitchell" && '/images/courses/teachers/a-1.webp'
                                            ||
                                            creator.name === "Ava Johnson" && '/images/courses/teachers/a-3.webp'
                                            ||
                                            creator.name === "Benny Martin" && '/images/courses/teachers/a-4.webp'
                                            ||
                                            creator.name === "Miller Noah" && '/images/courses/teachers/a-6.webp'
                                            }
                                        
                                        `} alt="info" />
                                </div>
                                <p className=' text-mainGray my-4'>
                                    Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed cursus in turpis vel fringilla pretium odio. Felis suspendisse orci potenti quis etiam netus. Eu et blandit posuere senectus sed pulvinar.
                                </p>
                                <h5 className=' text-xl mt-2'>Teacher’s Achievements:</h5>
                                <ul className='flex text-sm sm:text-base gap-2 vsm:gap-8 text-mainGray items-center child:flex-center child:gap-2 mb-6'>
                                    <li>
                                        <FaStar className=' text-main' />
                                        5 Star Reviews
                                    </li>
                                    <li className=' relative before:absolute before:bg-white before:h-[4px] before:w-[4px] before:rounded-full before:-left-4 before:top-3'>
                                        <FaCheck className=' text-main' />
                                        60+ Hours of Courses
                                    </li>
                                </ul>
                            </div>
                            {/* Reviews */}
                            <div className={`${toggleState === 3 ? 'block' : ' hidden'} space-y-4`}>
                                <div className=" flex items-start gap-4">
                                    <img className=' rounded-md' src="/images/u-11.webp" alt="user"></img>
                                    <div>
                                        <div className=' flex justify-between items-center mb-4'>
                                            <h5 className=' text-xl'>Jophie Alen</h5>
                                            <span className=' text-main'>★★★★★</span>
                                        </div>
                                        <p className=' text-mainGray  text-sm sm:text-base my-4'>
                                            Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-4">
                                    <img className=' rounded-md' src="/images/u-11.webp" alt="user"></img>
                                    <div>
                                        <div className=' flex justify-between items-center mb-4'>
                                            <h5 className=' text-xl'>Jophie Alen</h5>
                                            <span className=' text-main'>★★★★★</span>
                                        </div>
                                        <p className=' text-mainGray text-sm sm:text-base my-4'>
                                            Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-4">
                                    <img className=' rounded-md' src="/images/u-11.webp" alt="user"></img>
                                    <div>
                                        <div className=' flex justify-between items-center mb-4'>
                                            <h5 className=' text-xl'>Jophie Alen</h5>
                                            <span className=' text-main'>★★★★★</span>
                                        </div>
                                        <p className=' text-mainGray text-sm sm:text-base my-4'>
                                            Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                                <form>
                                    <div className="flex justify-center items-center mt-16">
                                        <div className=" px-7 w-full rounded-[12px] bg-mainWhite py-4 mainBoxShadow border">
                                            <p className="text-xl font-semibold text-main">
                                                Add Comment
                                            </p>
                                            <textarea className="h-28 px-3 text-sm py-1 mt-5 outline-none w-full resize-none bg-transparent rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>

                                            <div className=" text-right mt-2">
                                                <Button href='' styleBtn='' text='Send' readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Curriculum */}
                            <div className={`${toggleState === 2 ? 'block' : ' hidden'} space-y-3`}>

                                {
                                    toggleState === 2 && <Accordion sessions={sessions} title='Introduction' courseName={courseName} isUserRegisteredToThisCourse={courseDetails.isUserRegisteredToThisCourse} />
                                }


                                <div>
                                    <h2 onClick={toggleShowInfoHandler}>
                                        <button type="button" className={`${showInfo ? 'rounded-t-lg text-mainWhite bg-main' : 'rounded-lg bg-mainWhite text-mainBlack'} transition-all duration-[0.2s] ease-linear  flex items-center justify-between w-full p-5 border border-gray-200 gap-3`}>
                                            <span>Last Words</span>
                                            <IoIosArrowForward className={`${showInfo && 'rotate-90'} text-lg`} />
                                        </button>
                                    </h2>
                                    <div className={`${showInfo ? 'block' : 'hidden'}`} >
                                        <div className="p-5 text-sm sm:text-base  space-y-4 border border-t-0 rounded-b-lg bg-mainWhite border-gray-200">
                                            <p className="text-center text-main">Sessions have not been uploaded yet!</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {confirmModal && <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center h-full flex" >
                <div onClick={() => setConfirmModal(false)} className=" absolute inset-0 bg-mainBlack opacity-[0.7]"></div>

                <div className="relative w-full max-w-md px-4 h-auto">

                    <div className="bg-mainWhite rounded-lg shadow relative">

                        <div className="flex justify-end p-2">
                            <button onClick={() => setConfirmModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl px-4 py-2 ml-auto inline-flex items-center">
                                X
                            </button>
                        </div>

                        <div className="p-6 pt-0 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                className='w-20 h-20 text-green-500 mx-auto'
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to Add this Course</h3>
                            <button onClick={() => {
                                setConfirmModal(false)
                                registerInCourse(courseDetails)
                            }} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button onClick={() => setConfirmModal(false)} className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>}

            <FooterSection />

        </>
    )
}
