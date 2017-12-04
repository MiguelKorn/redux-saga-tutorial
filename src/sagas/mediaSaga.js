import { all, put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from "../api/api";
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({payload}) {
    try {
        const videos = yield call(shutterStockVideos, payload);
        const images = yield call(flickrImages, payload);

        // yield all([
        yield put({type: types.SHUTTER_VIDEOS_SUCCESS, videos});
        yield put({type: types.SELECTED_VIDEO, video: videos[0]});
        yield put({type: types.FLICKR_IMAGES_SUCCESS, images});
        yield put({type: types.SELECTED_IMAGE, image: images[0]});
        // ])
    } catch (err) {
        yield put({type: types.SEARCH_MEDIA_ERROR, err})
    }
}