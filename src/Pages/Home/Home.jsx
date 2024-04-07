import {useLoaderData} from "react-router-dom"
import Header from "../Shared/Header/Header";
import LeftSiteNave from "../Shared/LeftSiteNave/LeftSiteNave";
import Navber from "../Shared/Navber/Navber";
import RightSiteNave from "../Shared/RightSiteNave/RightSiteNave";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
  const news = useLoaderData()
  console.log(news);
    return (
        <div>

            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSiteNave></LeftSiteNave>
                </div>
                <div className=" lg:col-span-2">
                    {
                       news.map(aNews => <NewsCard
                         key={aNews._id}
                        aNews={aNews}>

                        </NewsCard>)
                        
                    }
                </div>
                <div className="" >
                    <RightSiteNave></RightSiteNave>
                </div>
            </div>
        </div>
    );
};

export default Home;