import { useEffect, useState } from "react"

const useRoom=()=>{
    const [rooms,setRoom]=useState([])
    useEffect(()=>{
        fetch('roomdata.json')
        .then(res=>res.json())
        .then(data=>setRoom(data))
    },[])
    return [rooms,setRoom]
}
export default useRoom