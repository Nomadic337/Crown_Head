import { createSelector } from 'reselect';

// A piece of the state: Cart
const selectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);