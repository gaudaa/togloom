import { Link } from 'react-router-dom'
import './header.css'
export const Header = () => {
    return(
        <header className='header'>
        <h1 className='logo'>Logo</h1>
        <div className='searchd'>
            <input type={'search'} className='search'></input>
            <button className='sbutton'></button>
        </div>
        <div className='menu'>
            <Link to="/home">Home</Link>
            <Link to="/pong">Pong</Link>
            <h3>games</h3>
            <h3>games</h3>
        </div>
        </header>
    )
}