import { useState, useEffect, React } from 'react'
import { MovieCard } from '../components/MovieCard'
import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API //url
const apiKey = import.meta.env.VITE_API_KEY //key

export const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)

        console.log(data)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`

        getTopRatedMovies(topRatedUrl)


    }, [])


    return (
        <div>
            <div className='container'>
                <h2 className='title'>Melhores filmes:</h2>
                <div className="movies-container">
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>

        </div>
    )
}
