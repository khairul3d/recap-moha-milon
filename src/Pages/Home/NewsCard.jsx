import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";


const NewsCard = ({ aNews }) => {
    const { title, image_url, details, _id, rating, total_view, thumbnail_url, name, published_date} = aNews;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                {/* profile */}
                <div className="navbar bg-base-100 shadow-lg">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={thumbnail_url} />
                            <div>
                                <h2>{name}</h2>
                                <p>{published_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)}
                                <Link to={`/news/${_id}`}
                                    className=" font-bold text-blue-500">Read More....</Link></p>
                            : <p>{details}</p>
                    }
                    <hr />
                    <div className="flex gap-x-3">
                        <div className="rating gap-x-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                        </div>
                        <div>
                            <p><span>{rating.number}</span></p>
                        </div>
                        <div className=" w-full ">
                            <p className="flex justify-end items-center"><GrFormView className=" text-3xl text-gray-500"></GrFormView>{total_view}</p>
                        </div>
                    </div>
                    <hr />
                    {/* profile ber */}


                </div>
            </div>
        </div>
    );
};

export default NewsCard;