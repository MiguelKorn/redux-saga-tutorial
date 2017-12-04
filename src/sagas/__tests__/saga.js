import { incrementAsync } from '../counterSaga';
import * as types from '../../constants/actionTypes';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { searchMediaSaga } from "../mediaSaga";
import { flickrImages, shutterStockVideos } from "../../api/api";

describe('sagas', () => {
    describe('media', () => {
        it('should call data from the api', () => {
            const action = {payload: "rain"};
            const images = [{
                id: "38111730024",
                title: "How Many Gallons in Lake Michigan and Other Facts",
                mediaUrl: "https://farm5.staticflickr.com/4563/38111730024_ec2c6dbe10.jpg"
            }];
            const videos = [{}];


            return expectSaga(searchMediaSaga, action)
                .provide([
                    [call(shutterStockVideos, action.payload), videos],
                    [call(flickrImages, action.payload), images],
                ])
                .put({type: types.FLICKR_IMAGES_SUCCESS, images})
                .dispatch({type: types.SEARCH_MEDIA_REQUEST, payload: 'rain'})
                .run()
        });
    });

    describe('counter', () => {
        it('should increment counter after 1 sec', () => {
            const action = {type: types.COUNTER_INCREMENT_ASYNC,};
            const gen = incrementAsync(action);
            const expectedYield = call(delay, 1000);

            expect(expectedYield).toEqual(gen.next().value);

            expect(put({type: types.COUNTER_INCREMENT})).toEqual(gen.next().value);
        });
    });
});