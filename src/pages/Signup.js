import signupImg from "../assets/signup.png"
import Template from "../components/Template"
function Signup(props) {

    return (
        <div>
                <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today , tommorow and beyond"
                desc2="Education to future-proof your career"
                image={signupImg}
                formtype="signup"
                setIsLoggedIn={props.setIsLoggedIn}
                ></Template>
        </div>
    )
}
export default Signup