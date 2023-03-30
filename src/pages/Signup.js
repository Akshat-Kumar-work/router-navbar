import signupImg from "../assets/signup.png"
import Template from "../components/Template"
function Signup(setIsLoggedIn) {

    return (
        <div>
                <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today , tommorow and beyond"
                desc2="Education to future-proof your career"
                image={signupImg}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn}
                ></Template>
        </div>
    )
}
export default Signup