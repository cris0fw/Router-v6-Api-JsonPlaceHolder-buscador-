import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Blog = () => {
const url = "https://jsonplaceholder.typicode.com/posts"

//Declaro un buscador en la url
const [search, setSearch] = useSearchParams()
const {datos, error, pendiente} = useFetch(url)

if(pendiente){
    return <h2>Cargando...</h2>
}

if(error !== ""){
    return <h2>{error}</h2>
}

const handleChange = e => {
    let filter = e.target.value

    if(filter){
        setSearch({filter})
    }
    else{
        setSearch({})
    }
}

    return <>
        <h1>Blog</h1>
        {/* Declaro el input donde tendra de valor de la url para que 
        se pinte arriba */}
        <input 
            className='form-control'
            placeholder='ingrese el valor'
            value={search.get('filter') || ''}
            onChange={handleChange}
        />


        {
            datos.filter((item) => {
                let filter = search.get('filter')
                if(!filter) return true

                let title = item.title.toLowerCase()
                return title.startsWith(filter.toLowerCase())
            }).map((item) => {
                return <Link to={`/blog/${item.id}`} key={item.id}><h4> {item.id} - {item.title}</h4></Link>
            })
        }
    </>
}

export default Blog