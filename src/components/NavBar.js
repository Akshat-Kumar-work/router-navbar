import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function NavBar (props){


 let isLoggedIn = props.isLoggedIn;
 let setIsLoggedIn = props.setIsLogeedIn;

return(
    <div className=" flex  justify-evenly">

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
        <div className=" flex gap-3 ml-5">
             {!isLoggedIn && 
                <Link to="/login"><button >Login</button></Link>

             }
            
            
       
            {!isLoggedIn &&
                <Link to="/signup"><button>Sign Up</button></Link>
                
            }

            {isLoggedIn &&
                <Link to="/"><button onClick={()=> {setIsLoggedIn(false); toast.success("Logged out") } }
                >Logout</button></Link>
                
            }

            { isLoggedIn &&
                <Link to="/dashboard"><button>Dashboard</button></Link>
                
            }
        </div>
    </div>
)
}
export  default NavBar;