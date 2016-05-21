export const LOGGED_IN = 'LOGGED_IN';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case LOGGED_IN:
        default:
            return state;
    }
}