import frameImg from "../assets/frame.png"
import Loginform from "./Loginform";
import Signupform from "./Signform";
import {FcGoogle} from "react-icons/fc"

function Template (props){

    return(
        <div  className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>

                <div className='w-11/12 max-w-[450px]'>
                        <h1  className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'
                        >{props.title}</h1>

                        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                            <span className='text-richblack-100'>{props.desc1}</span>
                            <span className='text-blue-100 italic'>{props.desc2}</span>
                        </p>
                        
                        {props.formtype === "signup" ? (<Signupform setIsLoggedIn={props.setIsLoggedIn}/>) : (<Loginform setIsLoggedIn={props.setIsLoggedIn} />)}

                        <div  className='flex w-full items-center my-4 gap-x-2'>
                            <div className='w-full h-[1px] bg-richblack-700'></div>
                            <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                            <div className='w-full h-[1px] bg-richblack-700'></div>
                        </div>

                        <button  className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ' > <FcGoogle/> Sign Up with Google</button>
                </div>

                <div className='relative w-11/12 max-w-[450px] '>
                    <img src={frameImg} width={558} height={504} loading="lazy"
                    className='relative w-11/12 max-w-[450px] '></img>
                    <img src={props.image} width={558} height={490} loading="lazy"
                     className='absolute -top-4 right-4'></img>
                </div>

        </div>
    )
}

export default Template;