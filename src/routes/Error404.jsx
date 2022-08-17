import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return <>
        <h1>404</h1>
        <Link to="/" className='btn btn-outline-primary'>Inicio</Link>
    </>
}

export default Error404