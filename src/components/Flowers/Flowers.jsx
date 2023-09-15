import { useEffect } from "react";
import { useState } from "react";
import Flower from "../Flower/Flower";

const Flowers = () => {
    const [flowers, setFlowers] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setFlowers(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                flowers.map(flower => <Flower key={flower.id} flower={flower}></Flower>)
            }
        </div>
    );
};

export default Flowers;