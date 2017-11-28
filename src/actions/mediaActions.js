import * as types from '../constants/actionTypes';

// return action type and the img
export const selectImageAction = image => ({
    type: types.SELECTED_IMAGE,
    image
});

// return action type and the video
export const selectVideoAction = video => ({
    type: types.SELECTED_VIDEO,
    video
});

// return action type and the search criteria
export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});