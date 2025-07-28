import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'

export const Slider = () => {
    useEffect(() => {
        
    }, [])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp)
        })
    }

  return (
    <div>Slider</div>
  )
}
