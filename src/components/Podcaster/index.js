import React from 'react'
import './Podcaster.css'
import podcasters from './PodcastersData.json'

const Podcaster = () => {
    return (
        <>
        {podcasters.map((item) => (
            <div className='podcasterContainer' key={item.id}>
                <div className='podcasterImageContainer'>
                    <img src={item.avatar} alt={item.name} />
                </div>
                <div className='podcasterProfileContainer'>
                    <h3>{item.title}</h3>
                    <p>{item.name}</p>
                </div>
            </div>
        ))}
            
        </>
    )
}

export default Podcaster
