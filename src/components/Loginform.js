import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from "react-router-dom";

function Loginform(){

    const [showPassword , setShowPassword] = useState(false);

    const [ formData , setFormData] = useState(
        {
            email:"",
            password:""
        }
    );
    
    function changeHandler (event){
        setFormData( (prevdata)=>{
            return( { ...prevdata, [event.target.name]:event.target.value })
        })
    }


    return(
        <div>
        <form>


            <label > <p>Email Address <sup>*</sup> </p> 
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" name="email"></input>
            </label>


            <label > <p>Password <sup>*</sup> </p> 
            <input required type={showPassword ? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder="Enter Password" name="password"></input>

            <span onClick={ ()=>setShowPassword( (prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}
            </span>


            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>


            </label>

            <button>
                Sign In
            </button>

        </form>
           
        </div>
    )
}
export default Loginform;