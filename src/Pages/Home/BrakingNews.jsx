
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex gap-x-2">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true} speed={150}>
                <Link className=" mr-4" to="/">I can be a React component, multiple React components, or just some text.......</Link>
                <Link className=" mr-4" to="/">I can be a React component, multiple React components, or just some text.......</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;