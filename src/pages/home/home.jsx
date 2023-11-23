import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Widget from '../../components/widgets/widget'



const Home = () => {
    return(
        <div className='home'>
            <Sidebar/>
            <div className='homecontainer'>
                <Navbar/>
                <div className="widgets">
                    <Widget type = "user" />
                    <Widget type = "orders" />
                    <Widget type = "earnings" />
                    <Widget type = "balance" />                    
                </div>
            </div>
        </div>
    )
};

export default Home