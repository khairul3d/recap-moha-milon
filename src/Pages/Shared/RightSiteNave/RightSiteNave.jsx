import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSiteNave = () => {
    return (
        <div>
            <div className=" p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login Width</h2>
                <div>
                    <button className="btn my-3 px-6 m-3 outline outline-green-500 text-green-500">
                        <IoLogoGoogle />
                        Login Width Google
                    </button>
                    <button className="btn my-3 px-6 m-3 outline">
                        <FaGithub />
                        Login Width Github
                    </button>
                </div>
            </div>
            <div className=" p-4 mb-6">
                <h2 className="text-2xl mb-6">Find Us On</h2>
                <div className=" ">
                    <a className="flex items-center border rounded-t-lg  p-3" href="">
                        <FaFacebook className="mr-2"></FaFacebook>
                     <span> Facebook</span>
                    </a>
                    <a className="flex items-center border-x  p-3" href="">
                       <FaTwitter className="mr-2"></FaTwitter>
                     <span> Facebook</span>
                    </a>
                    <a className="flex items-center border rounded-b-lg p-3" href="">
                        <FaInstagram className="mr-2"></FaInstagram>
                     <span> Facebook</span>
                    </a>

                </div>
                {/* {q zone} */}
                <div className=" p-4 space-y-3 mb-6 bg-base-100 shadow-xl mt-12">
                <h2 className="text-2xl">Q Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            </div>


        </div>
    );
};

export default RightSiteNave;