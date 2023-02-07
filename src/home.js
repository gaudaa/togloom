import './home.css'
import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    return(
        <div>
            <main className='main'>
                <div className='main1'>
                    <Link to="/pong"><div className='pong'>

                    </div></Link>
                    <div className='rps'>

                    </div>
                    <div className='ox'>

                    </div>
                </div>
            </main>
        </div>
    )
}
