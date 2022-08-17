import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState("");
  const [pendiente, setPendiente] = useState(true);

    useEffect(() =>{
       const apiFetch = async (url) => {
            try{
                setPendiente(true)
                const res = await fetch(url)
                const json = await res.json()

                setDatos(json)
            }catch(err){
                setError("Hubo errores estado 404")
            }
            finally{
                setPendiente(false)
            }
       }
       apiFetch(url)
    },[url])
  
    return {datos, error, pendiente}
};
