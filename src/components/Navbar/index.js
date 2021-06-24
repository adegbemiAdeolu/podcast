import { Menu, PersonRounded, PlayArrowOutlined, SearchOutlined, Mic } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'

function index() {
    return (
        <div className='container'>
            <div className='logoContainer'>
                <Mic />
                <h2>Godcast</h2> 
            </div>

            <div className='searchContainer'>
                <input className='searchInput' type='text' />
                <SearchOutlined className='search' />
            </div>

            <div className='accountContainer'>
                <PlayArrowOutlined />
                <PersonRounded /> 
                <Menu />         
            </div>                     
        </div>
    )
}

export default index
