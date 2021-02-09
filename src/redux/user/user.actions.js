import {UserActionTypes} from './user.action.types';

export const setCurrentUser= user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});