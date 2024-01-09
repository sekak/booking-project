import axios from "axios"
import { useEffect, useState } from "react"


const FetchData = (url)=>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axios.get("http://localhost:8080/api"+ url)
                setData(res.data)
            }catch(err)
            {
                console.log(err.message)
                setError(true)
            }
            setLoading(false)
        }
        fetchData();
    }, [url])

    return {data, loading, error}
}

export default FetchData;