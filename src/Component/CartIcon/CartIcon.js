import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';
import { selectCartItemsCount } from '../../Redux/Cart/CartSelectors';
import { createStructuredSelector} from 'reselect';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
        <div className='cart-icon' onClick={toggleCartHidden}> 
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Selector for cart/shopping-bag.svg
const mapStateProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateProps, mapDispatchToProps)(CartIcon);  