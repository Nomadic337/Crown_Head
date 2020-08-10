import { all, call } from 'redux-saga/effects';
import { onFetchCollectionsStart } from './Shop/ShopSagas';
import { userSagas } from './User/UserSagas';

export default function* rootSaga() {
    yield all([call(onFetchCollectionsStart), call(userSagas)]);
}