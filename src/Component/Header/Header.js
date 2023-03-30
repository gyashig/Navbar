import React from 'react'
import './Header.css'
import Search from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Time from './Time'
import { Link } from 'react-router-dom'
import Menu from './Menu'

function Header() {

    return (
        <div className='header_container'>
            <div className='header_left'>

                <div className='search_box'>
                    <Search className='search_icon' />
                    <input type='text' placeholder="Search News" />
                </div>
            </div>
            <div className='time'>
                <Time/>
            </div>
            <div className='name'>
            <Link to='/'>
                    <img className='header_image' src='teleicons.jpg' />
                </Link>
            <h1 > 𝕿𝖊𝖑𝖊𝖕𝖔𝖗𝖙 𝕿𝖎𝖒𝖊𝖘</h1>
            </div>
           
            <div className='header_right'>
               
                <Link style={{ textDecoration: 'none' }} to='/profile'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        Profile
                    </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/contacts'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        Contacts
                    </Button>
                </Link>

                <Link style={{ textDecoration: 'none' }} to='/about-us'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        ABOUT US
                    </Button>
                </Link>

                {/* <Link style={{ textDecoration: 'none' }} to='/profile'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        PROFILE
                    </Button>
                </Link> */}
                <Button style={{ border: 'none' }} variant='outlined'>
                    Help
                </Button>
                
            </div>

            <div className='menu'>
                <Menu/>
            </div>

        </div>
    )
}

export default Header;