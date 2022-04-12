import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-header.png'
import { BeakerIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'Single Room', path: '/singleroom', id: 2 },
        { name: 'Double Room', path: '/doubleroom', id: 3 },
        { name: 'Family Room', path: '/familyroom', id: 4 },
        { name: 'Login', path: '/login', id: 5 },
        { name: 'Register', path: '/register', id: 6 },
    ]
    console.log(open)
    const handleOpen = () => setOpen(!open)
    return (
        <div className='header'>
            <header className='container d-flex justify-content-between align-items-center' >
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul  className={`d-xl-flex align-items-center ${open ? 'ul':'menu'}`}>
                        {links.map(link => <li key={link.id}>
                            <NavLink
                                className='nav'
                                key={link.id}
                                to={link.path}
                            >{link.name}</NavLink>
                        </li>)
                        }
                    </ul>
                </nav>
                <div onClick={handleOpen} className='icon'>
                    {
                        open ? <XIcon className='menu-icon' /> : <MenuAlt1Icon className='menu-icon' />
                    }
                </div>
            </header>
        </div>
    );
};

export default Header;