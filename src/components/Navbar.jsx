import { Link, useNavigate } from 'react-router-dom'
import { useState, React } from 'react'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import './Navbar.css'

export const Navbar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`search?q=${search}&language=pt-BR`)
        setSearch("")
    }


  return (
    <nav id='navbar'>
        <h2>
            <Link to="/">
                <BiCameraMovie/>MoviesLib
            </Link>
        </h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
    </nav>
  )
}
