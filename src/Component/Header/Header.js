import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import './Header.scss';

const Header = ({ currentUser, hidden }) => (
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
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                <Link className='option' to='/signin' >SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);