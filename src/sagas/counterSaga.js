import {delay} from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* incrementAsync() {
    yield delay(1000);
    yield put({type: types.COUNTER_INCREMENT})
}