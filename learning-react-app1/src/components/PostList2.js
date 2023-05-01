// using axios 

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostList2() {

    const [data, setData] = useState([])
    const [isError, setIsError] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => setData(response.data))
        .catch((error)=>setIsError(error.message));
    },[]);
    return (
        <div>
            <h1>Axios </h1>
            {data.slice(0,9).map((post) =>{
                const {id, title, thumbnailUrl} = post;
                return(
                    <div key={id}>
                        <h2>{title}</h2>
                        {/* <div>{thumbnailUrl.urls.small}</div> */}
                        
                        {/* <img src={thumbnailUrl.urls.regular} alt="" /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default PostList2
