import {  Navigate } from "react-router-dom";

function PrivateRoute(props){
   
    if(props.isLoggedIn){
        return props.children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }

}

export default PrivateRoute;