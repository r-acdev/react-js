import { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export const Slider = () => {

    const[movieList, setMovieList]= useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results);
        })
    };
    const sliderRight=(element) => {
        element.scrollLeft+=screenWidth-110;
    }
    const sliderLeft=(element) => {
        element.scrollLeft-=screenWidth-110;    
    }
  return (
    <>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)}/>
        
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
            {movieList.map((movie,index) => (
                <img
                    key={index}
                    src={IMAGE_BASE_URL+movie.poster_path}
                    alt={movie.title}
                    className='min-w-full md:h-[600px] object-cover rounded-md mr-5 hover:border-[4px] border-gray-400 transition-all duration-400 cursor-pointer ease-in object-center'/>
            ))}
        </div>
    </>
  )
}
