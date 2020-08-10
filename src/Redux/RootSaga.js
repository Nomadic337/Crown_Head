import { all, call } from 'redux-saga/effects';
import { shopSagas } from './Shop/ShopSagas';
import { userSagas } from './User/UserSagas';
import { cartSagas } from './Cart/CartSagas';

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}