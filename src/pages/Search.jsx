import { React, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css"

export const Search = () => {
    return (
        <div className='container'>
            <h2 className='title'>Resultadores para: <span className='query-text'>{query}</span></h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div> 
        </div>
    )
}
