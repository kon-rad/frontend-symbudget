import {SENDING_REQUEST} from '../constants/actionTypes';

export default function request(state, action) {

    switch (action.type) {

        case SENDING_REQUEST: {
            return Object.assign({}, state, {
                sendingRequest: action.payload.sendingRequest
            })
        }
    }

}