import {takeLatest} from 'redux-saga/effects';
import {searchMediaSaga} from './mediaSaga';
import {incrementAsync} from "./counterSaga";
import * as types from '../constants/actionTypes';

export function* watchSearchMedia() {
    yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}

export function* watchIncrementAsync() {
    yield takeLatest(types.COUNTER_INCREMENT, incrementAsync);
}