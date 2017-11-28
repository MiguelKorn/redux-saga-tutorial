import {fork} from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// register sagas and export as a single generator
export default function* startForeman() {
    yield fork(watchSearchMedia);
}