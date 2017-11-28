import initialState from './initialState';
import * as types from '../constants/actionTypes';

// handles video actions
export default function (state = initialState.images, action) {
    switch (action.type) {
        case types.SHUTTER_VIDEOS_SUCCESS:
            return [...state, action.videos];
        case types.SELECTED_VIDEO:
            return {...state, selectedVideo: action.video};
        default:
            return state;
    }
};