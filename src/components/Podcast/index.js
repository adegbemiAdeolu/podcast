import React from 'react';
import './Podcast.css';
import episodes from './Data.json'




export default function Podcast() {    

    return (
        <>
        {episodes.map((item) =>(
            <div className='podcastContainer' key={item.id}>
                <div className='imageContainer'>
                    <img src={item.image} alt={item.alt} />
                </div>
                <div className='podcastBodyContainer'>
                    <h3 className='episodeTitle'>
                        {item.title}
                    </h3>
                    <div className='episodeData'>
                        <small>{item.author}</small>
                        <small>/</small>
                        <small>
                            {new Date().toUTCString()}
                        </small>                        
                    </div>
                    <audio className='podcastAudio' preload='none' controls controlsList='nodownload'>
                        <source src={item.audio} />
                    </audio>
                </div>
            </div> 
        ) )}

            

                
                
                         
        
    </>       
    );
}

