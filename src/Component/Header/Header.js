import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { signOutStart } from '../../Redux/User/UserActions';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.style';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
                <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);