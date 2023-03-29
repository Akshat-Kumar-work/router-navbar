import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
function NavBar (){
return(
    <div className=" flex">

        <Link to="/">
            <img src={logo} width={160} height={32} loading="lazy"></img>
        </Link>

        <nav className="flex gap-3" >
            <ul  >
                <li> <Link to="/" >Home</Link></li>
            </ul>

            <ul>
                <li> <Link to="/" >About</Link></li>
            </ul>

            <ul>
                <li> <Link to="/" >Contact</Link></li>
            </ul>
        </nav>

        {/* Login-signup-logout-dashboard btn */}
        <div className=" flex gap-3 ">
            {
                <Link to="/login"><button>Login</button></Link>

            }

            {
                <Link to="/signup"><button>Sign Up</button></Link>
                
            }

            {
                <Link to="/home"><button>Logout</button></Link>
                
            }

            {
                <Link to="/dashboard"><button>Dashboard</button></Link>
                
            }
        </div>
    </div>
)
}
export  default NavBar;