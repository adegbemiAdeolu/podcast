import React from 'react'
import Navbar from '../../components/Navbar'
import NewPodcast from '../../components/NewPodcast'

const PodcastUpload = () => {
    return (
        <div className='podcastUploadContainer'>
            <Navbar />
            <div className='pod'>
                <NewPodcast />
            </div>
        </div>
    )
}

export default PodcastUpload
