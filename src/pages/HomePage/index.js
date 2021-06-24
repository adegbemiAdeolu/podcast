import React from 'react'
import './home.css'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Podcasts from '../../components/Podcasts'
import PodcastRow from '../../components/PodcastRow'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className='pod'>
                <PodcastRow />
                 <Podcasts />
            </div>
           
        </div>
    )
}

export default Home
