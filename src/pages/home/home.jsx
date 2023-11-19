import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar';


const Home = () => {
    return(
        <div className='home'>
            <Sidebar/>
            <div className='homecontainer'>
                <Navbar/>
                <div className="widgets">
                    
                </div>
            </div>
        </div>
    )
};

export default Home