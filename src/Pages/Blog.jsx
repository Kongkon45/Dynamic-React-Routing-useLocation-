import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <h1>{title}</h1>
        <p>{location.state.body}</p>
    </div>
  )
}

export default Blog