import frameImg from "../assets/frame.png"
import Loginform from "./Loginform";
import Signupform from "./Signform";

function Template (props){

    return(
        <div>

                <div>
                        <h1>{props.title}</h1>

                        <p>
                            <span>{props.desc1}</span>
                            <span>{props.desc2}</span>
                        </p>
                        
                        {props.formtype === "signup" ? (<Signupform setIsLoggedIn={props.setIsLoggedIn}/>) : (<Loginform setIsLoggedIn={props.setIsLoggedIn} />)}

                        <div>
                            <div></div>
                            <p>OR</p>
                            <div></div>
                        </div>

                        <button>Sign Up with Google</button>
                </div>

                <div>
                    <img src={frameImg} width={558} height={504} loading="lazy"></img>
                    <img src={props.image} width={558} height={490} loading="lazy"></img>
                </div>

        </div>
    )
}

export default Template;