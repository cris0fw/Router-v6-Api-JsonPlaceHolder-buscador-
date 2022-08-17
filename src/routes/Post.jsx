import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Post = () => {
let params = useParams()
const {datos, error, pendiente} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`) 

if(pendiente){
    return <h2>cargando...</h2>
}

if(error !== ""){
    return <h2>{error}</h2>
}

 return <>
  <h1>
    {datos.id} - {datos.title}
  </h1>
  <p>{datos.body}</p>
 </>
}

export default Post