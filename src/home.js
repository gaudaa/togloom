import './home.css'
import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    return(
        <div>
            <header className='header'>
                <h1 className='logo'>Logo</h1>
                <div className='searchd'>
                    <input type={'search'} className='search'></input>
                    <button className='sbutton'></button>
                </div>
                <div className='menu'>
                    <Link to="Home">Home</Link>
                    <h3>games</h3>
                    <h3>games</h3>
                    <h3>games</h3>
                </div>
            </header>
            <main className='main'>
                <div className='main1'>
                    <div className='tennis'>

                    </div>
                    <div className='rps'>

                    </div>
                    <div className='ox'>

                    </div>
                </div>
            </main>
        </div>
    )
}
