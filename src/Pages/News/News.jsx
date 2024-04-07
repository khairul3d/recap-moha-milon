import {useParams} from "react-router-dom"
import Header from "../Shared/Header/Header";
import RightSiteNave from "../Shared/RightSiteNave/RightSiteNave";
import Navber from "../Shared/Navber/Navber";


const News = () => {
    const {id} = useParams() 
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
          
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 ">
                     <h2>News Detail</h2>
                     <p>{id}</p>
                </div>
                <div className=" ">
                    <RightSiteNave></RightSiteNave>
                </div>
            </div>
        </div>
    );
};

export default News;