import React from 'react';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            { currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin' >
                    SIGN IN
                </OptionLink >
            )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);