import { useEffect, useState } from "react";

const useLoad = () => {
    const [foodData, setfoodData] = useState([])
    useEffect(() => {
        fetch('../food.json').then(res => res.json()).then(data => setfoodData(data))
    }, []);
    return [foodData]
}
export default useLoad;