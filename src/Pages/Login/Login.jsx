import { Link, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Probider/AuthContextProbider";
import { useLocation } from "react-router-dom"



const Login = () => {
    const { signIn } = useContext(AuthContext)
    const loacation = useLocation();
    const navigate = useNavigate()
    console.log(loacation);
   
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const password = from.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? loacation.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <Navber></Navber>
            <div>
                <h2 className="text-3xl text-center">Please Login</h2>

                <form onSubmit={handleLogin} className="card-body md:w-2/4 lg: w-1/2  mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className=" text-center font-medium">Do not have a account?<Link className=" text-red-500 ml-2" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;