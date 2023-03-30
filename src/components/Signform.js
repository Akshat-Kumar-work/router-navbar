import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

function Signupform(){
    const [showPassword , setShowPassword] = useState(false);

    const[formData , setFormData] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )

    function changeHandler(event){
        setFormData( (prevdata)=> {  return( { ...prevdata , [event.target.name]:event.target.value})})
    }

    return(
        <div>
            
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form>


                {/* first name and last name */}
                <div>
                <label >
                    <p>First Name <sup>*</sup></p>
                    <input type="text" required name="firstname" onChange={changeHandler} placeholder="Enter First Name" value={formData.firstName}></input>
                </label>

                <label >
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" required name="lastname" onChange={changeHandler} placeholder="Enter First Name" value={formData.lastName}></input>
                </label>
                </div>
                
                {/* email Address */}
                <label > <p>Email Address <sup>*</sup> </p> 
                 <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email Address" name="email"></input>
                </label>

                {/* create pasword and confirm password */}
                <div>

                <label > <p>Create Password <sup>*</sup> </p> 
            <input required type={showPassword ? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder="Enter Password" name="password"></input>
            <span onClick={ ()=>setShowPassword( (prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}
            </span>
                </label>


                <label > <p>Confirm Password <sup>*</sup> </p> 
            <input required type={showPassword ? ("text"):("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="confirm Password" name="confirmPassword"></input>
            <span onClick={ ()=>setShowPassword( (prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}
            </span>
                </label>               

                </div>

                <button >
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default Signupform;