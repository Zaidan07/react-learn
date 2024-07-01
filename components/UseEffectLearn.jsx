import { useEffect } from "react";

export default function UseComponent () {

    const getData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
        getData();
    }, [])
    
    return <div></div>
}