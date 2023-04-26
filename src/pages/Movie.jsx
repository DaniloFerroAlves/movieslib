import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsFillFileEarmarkTextFill,
  BsHourglassSplit
} from 'react-icons/bs'

import { MovieCard } from '../components/MovieCard'

import './Movie.css'


const moviesURL = import.meta.env.VITE_API //url
const apiKey = import.meta.env.VITE_API_KEY //key


export const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`
    getMovie(movieUrl)
  }, [])

  return (
    <div className='movie-page'>
      {movie &&
        <>
          <div>
            <MovieCard showLink={false} movie={movie} />
            <p className='tagline'>{movie.tagline}</p>
          </div>
          <div className='informations'>
            <div className='info'>
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className='info'>
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className='info'>
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className='info description'>
              <h3>
                <BsFillFileEarmarkTextFill /> Sinopse:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>


        </>}
    </div>
  )
}
