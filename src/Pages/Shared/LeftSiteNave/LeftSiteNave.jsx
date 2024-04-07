import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSiteNave = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    
    return (
        <div className=" space-y-8 ml-5">
            {
                categories.map(category => 
                <Link to={`/category${category.id}`}
                 className=" block text-xl font-medium text-gray-500" 
                 key={category.id}>{category.name}
                 {
                    
                 <img src={category.img} alt="" />
                 }
                 </Link>)
            }
            
        </div>
    );
};

export default LeftSiteNave;