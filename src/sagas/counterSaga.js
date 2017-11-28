import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* incrementAsync() {
    yield call(delay, 1000); // OR yield delay(1000);
    yield put({type: types.COUNTER_INCREMENT})
}