import {fork, all} from 'redux-saga/effects';
import {watchSearchMedia, watchIncrementAsync} from './watcher';

// register sagas and export as a single generator
export default function* startForeman() {
    yield all([
        fork(watchSearchMedia),
        fork(watchIncrementAsync)
    ]);
}