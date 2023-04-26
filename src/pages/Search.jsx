import { React, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css"

export const Search = () => {

    const [movies, setMovies] = useState([])
    const [searchParams] = useSearchParams()

    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)

        console.log(data)
    }

    useEffect(() => {

        const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchWithQueryUrl)


    }, [query])

    return (
        <div className='container'>
            <h2 className='title'>Resultadores para: <span className='query-text'>{query}</span></h2>
            <div className="movies-container">
                {movies.length > 0 && 
                movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div> 
        </div>
    )
}
