import {REQUEST__STARTED} from '../constants/ActionTypes';

export default function request(state = {
    sendingRequest: false,
    inProgress: []
}, action) {

    switch (action.type) {

        case REQUEST__STARTED: {

            return Object.assign({}, state, {
                sendingRequest: true,
                inProgress: state.inProgress.concat([action.payload.requestFrom])
            });
        }

        default: {
            return state;
        }
    }

}