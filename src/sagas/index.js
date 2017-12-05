import { fork, takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from "./mediaSaga";
import { incrementAsync } from "./counterSaga";
import * as types from "../constants/actionTypes";

// register sagas and export as a single generator
export default function* startForeman() {
    // yield all([
    yield fork(takeLatest, types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
    yield fork(takeLatest, types.COUNTER_INCREMENT_ASYNC, incrementAsync);
    // ]);
}