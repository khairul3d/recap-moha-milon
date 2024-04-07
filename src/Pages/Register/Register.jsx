import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { AuthContext } from "../../Probider/AuthContextProbider";
import { useContext } from "react";
import { GrNavigate } from "react-icons/gr";



const Register = () => {
    const {creatUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const  name = from.get('name')
        const  photo= from.get('photo')
        const  email = from.get('email')
        const  password = from.get('password')
        console.log(name, photo, email, password);

        creatUser(email, password)
        .then(result => {
            console.log(result.user);
            e.currentTarget.reset()
          
        })
        .catch(error => {
            console.error(error)
        })
    }
    
    return (
        <div>
             <Navber></Navber>
            <div>
                <h2 className="text-3xl text-center">Please Register</h2>

                <form onSubmit={handleRegister} className="card-body md:w-2/4 lg: w-1/2  mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className=" text-center font-medium">Al redy have a account?<Link className=" text-red-500 ml-2" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;