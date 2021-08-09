import React from 'react';
import NavBar from '../../components/navBar/NavBar'
import './Home.css'

const Home = () => {
    return ( 
        <div className="Home">
            <NavBar/>
            <div className="container">
                <p>Home</p>
            </div>
        </div>
     );
}
 
export default Home;