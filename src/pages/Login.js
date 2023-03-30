import Template from "../components/Template"
import loginImg from "../assets/login.png"
function Login (setIsLoggedIn){

    return(
        <div>
                <Template
                title="Welcome Back"
                desc1="Build skills for today , tommorow and beyond"
                desc2="Education to future-proof your career"
                image={loginImg}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
                ></Template>
        </div>
    )
}

export default Login;