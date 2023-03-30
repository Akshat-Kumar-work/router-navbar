import frameImg from "../assets/frame.png"
import Loginform from "./Loginform";
import Signupform from "./Signform";

function Template (title , desc1 , desc2 , image , formtype ,  setIsLoggedIn){

    return(
        <div>

                <div>
                        <h1>{title}</h1>

                        <p>
                            <span>{desc1}</span>
                            <span>{desc2}</span>
                        </p>
                        
                        {formtype === "signup" ? (<Signupform/>) : (<Loginform/>)}

                        <div>
                            <div></div>
                            <p>OR</p>
                            <div></div>
                        </div>

                        <button>Sign Up with Google</button>
                </div>

                <div>
                    <img src={frameImg} width={558} height={504} loading="lazy"></img>
                    <img src={image} width={558} height={490} loading="lazy"></img>
                </div>

        </div>
    )
}

export default Template;