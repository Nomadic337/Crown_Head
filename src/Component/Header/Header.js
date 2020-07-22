import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './Header.scss';
import { link } from 'fs';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <link className='option' to='/signin' ></link>
            }
        </div>
    </div>
);

export default Header;