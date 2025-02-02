import { useEffect, useState } from "react";


export function useFetch(url){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url).then(Response => Response.json()).then(data=>{
            setData(data);
        })
    }, [url]);

    return data;
}