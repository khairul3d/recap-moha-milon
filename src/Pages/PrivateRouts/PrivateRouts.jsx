import { useContext } from "react";
import { AuthContext } from "../../Probider/AuthContextProbider";
import {Navigate} from "react-router-dom"
import {useLocation} from "react-router-dom"


const PrivateRouts = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    const loacation = useLocation()
    console.log(loacation.pathname);

    if(loding){
        return <div className=" text-center mt-20"><span className="loading loading-dots loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate state={loacation.pathname} to="/login"></Navigate>
};

export default PrivateRouts; 