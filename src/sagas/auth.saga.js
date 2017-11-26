import * as api from '../connectivity/api';
import {call, put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import * as types from '../constants/ActionTypes';
import jwtDecode from 'jwt-decode';



export function *doLogin(action) {

    try {

        const {username, password} = action.payload;

        const responseBody = yield call(api.login, username, password);

        if (typeof responseBody.token === "undefined") {
            throw new Error('Unable to find JWT in response body');
        }

        yield put({
            type: types.LOGIN__SUCCEEDED,
            payload: {
                idToken: responseBody.token
            }
        });

    } catch (e) {

        yield put({
            type: types.LOGIN__FAILED,
            payload: {
                message: e.message,
                statusCode: e.statusCode
            }
        });

    }
}

export function *watchLogin() {
    yield takeLatest(types.LOGIN__REQUESTED, doLogin);
}

export function *doLoginSucceeded(action) {

    const {idToken} = action.payload;

    const {id, username} = yield call(jwtDecode, idToken);

    yield put({
        type: types.LOGIN__COMPLETED,
        payload: {
            id,
            username
        }
    });
}

export function *watchLoginSucceeded() {
    yield takeLatest(types.LOGIN__SUCCEEDED, doLoginSucceeded);
}

export function *doLoginFailed(action) {

}

export function *watchLoginFailed() {
    yield takeLatest(types.LOGIN__FAILED, doLoginFailed);
}








// export function *watchLogin() {
//     yield* takeLatest(types.LOGIN__REQUESTED, doLogin);
// }
//
// export function *doLogin(action) {
//     try {
//
//         const {username, password} = action.payload;
//
//         yield put({
//             type: types.REQUEST__STARTED,
//             payload: {
//                 requestFrom: REQUESTS.REQUEST__DOLOGIN__SAGA
//             }
//         });
//
//         const responseBody = yield call(api.login, username, password);
//
//         if (responseBody.token === undefined) {
//             throw new Error(MESSAGES.UNABLE_TO_FIND_TOKEN_IN_LOGIN_RESPONSE);
//         }
//
//         yield put({
//             type: types.LOGIN__SUCCEEDED,
//             payload: {
//                 idToken: responseBody.token
//             }
//         });
//
//     } catch (e) {
//
//         yield put({
//             type: types.LOGIN__FAILED,
//             payload: {
//                 message: e.message,
//                 statusCode: e.statusCode
//             }
//         });
//
//     } finally {
//         yield put({
//             type: types.REQUEST__FINISHED,
//             payload: {
//                 requestFrom: REQUESTS.REQUEST__DOLOGIN__SAGA
//             }
//         });
//     }
// }
//
// export function *doLoginSucceeded(action) {
//
//     const {idToken} = action.payload;
//
//     if (idToken === undefined) {
//         throw new Error(MESSAGES.UNABLE_TO_FIND_TOKEN_IN_ACTION);
//     }
//
//     yield call(storage.save, 'id_token', idToken);
//
//     const {userId, username} = yield call(jwtDecode, idToken); // pull out the user data from the JWT
//
//     if (userId === undefined) {
//         throw new Error(MESSAGES.UNABLE_TO_FIND_USER_ID);
//     }
//
//     yield call(storage.save, 'profile', JSON.stringify({userId, username}));
//
//     yield put({
//         type: types.LOGIN__COMPLETED,
//         payload: {
//             userId,
//             username
//         }
//     });
// }
//
// export function *watchLoginSucceeded() {
//     yield* takeLatest(types.LOGIN__SUCCEEDED, doLoginSucceeded);
// }