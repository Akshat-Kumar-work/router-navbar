import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signupform(props){

    const [showPassword , setShowPassword] = useState(false);
    const [showpassword , setShowpassword] = useState(false);

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
            
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>


                {/* first name and last name */}
                <div>
                <label >
                    <p>First Name <sup>*</sup></p>
                    <input type="text" required name="firstName" value={formData.firstName} onChange={changeHandler} placeholder="Enter First Name"  ></input>
                </label>

                <label >
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" required name="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Enter First Name" ></input>
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
                {showPassword ? (<AiOutlineEye></AiOutlineEye>) : (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>)}
            </span>
                </label>


                <label > <p>Confirm Password <sup>*</sup> </p> 
            <input required type={showpassword ? ("text"):("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="confirm Password" name="confirmPassword"></input>
            <span onClick={ ()=>setShowpassword( (prev)=> !prev)}>
                {showpassword ? (<AiOutlineEye></AiOutlineEye>) : (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>)}
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