import { incrementAsync } from '../counterSaga';
import * as types from '../../constants/actionTypes';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { searchMediaSaga } from "../mediaSaga";
import { flickrImages } from "../../api/api";


describe('sagas', () => {
    // describe('media', () => {
    //     it('should call data from the api', () => {
    //         const action = {payload: 'rain'};
    //         const gen = searchMediaSaga(action);
    //         const expectedYield = call(flickrImages, action.payload);
    //
    //         expect(expectedYield).toEqual(gen.next().value);
    //
    //         const images = {};
    //         expect(put({type: types.FLICKR_IMAGES_SUCCESS, images})).toEqual(gen.next(images).value);
    //     });
    // });

    describe('counter', () => {
        it('should increment counter after 1 sec', () => {
            const action = {type: types.COUNTER_INCREMENT_ASYNC,};
            const gen = incrementAsync(action);
            const expectedYield = call(delay, 1000);

            const actualYield = gen.next().value;

            expect(expectedYield).toEqual(actualYield);
        });
    });
});