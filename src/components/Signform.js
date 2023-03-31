import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signupform(props){

    const [showPassword , setShowPassword] = useState(false);
    const [showpassword , setShowpassword] = useState(false);
    const [accType , setAccType] = useState("student");
    const[formData , setFormData] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )
console.log(formData)
    function changeHandler(event){
        setFormData( (prevdata)=> {  return( { ...prevdata , [event.target.name]:event.target.value})})
    }

    const navigate = useNavigate()

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Password doesnt match")
    }
    else{
        navigate("/dashboard")
        toast.success("Signed Up Successfully")
        props.setIsLoggedIn(true);
    }
        
    }



    return(
        <div>
            
            <div className=" flex bg-richblack-800 gap-z-1 my-6 rounded-full max-w-max">

                <button onClick={()=>{
                   return setAccType("student");
                }} className={`${accType==="student"?(" bg-richblack-900 text-richblack-5 "):("bg-transparent text-richblack-200")} 
                py-2 px-5 rounded-full transition-all duration-100`}>
                    Student
                </button>
                <button onClick={()=>{ 
                  return  setAccType("instructor")}}
                     className={`${accType==="instructor"?(" bg-richblack-900 text-richblack-5 "):("bg-transparent text-richblack-200")} 
                py-2 px-5 rounded-full transition-all duration-100`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >


                {/* first name and last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input type="text" required name="firstName" value={formData.firstName} onChange={changeHandler} placeholder="Enter First Name" 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' ></input>
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input type="text" required name="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Enter Last Name" 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>
                </div>
                
                {/* email Address */}
                <div className='mt-[20px]'>
                <label className='w-full mt-[20px]' > <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup> </p> 
                 <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email Address" name="email"
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>
                </div>
               

                {/* create pasword and confirm password */}
                <div className='w-full flex gap-x-4 mt-[20px]'>

                <label className='w-full relative' > <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup> </p> 
            <input required type={showPassword ? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder="Enter Password" name="password"
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
            <span onClick={ ()=>setShowPassword( (prev)=> !prev)}
            className='absolute right-3 top-[38px] cursor-pointer' >
                {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>)}
            </span>
                </label>


                <label className='w-full relative' > <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup> </p> 
            <input required type={showpassword ? ("text"):("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="confirm Password" name="confirmPassword"
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
            <span onClick={ ()=>setShowpassword( (prev)=> !prev)}
            className='absolute right-3 top-[38px] cursor-pointer'>
                {showpassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>)}
            </span>
                </label>               

                </div>

                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default Signupform;