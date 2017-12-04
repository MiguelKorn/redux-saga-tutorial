import { incrementAsync } from '../counterSaga';
import * as types from '../../constants/actionTypes';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { searchMediaSaga } from "../mediaSaga";
import { flickrImages, shutterStockVideos } from "../../api/api";

global.fetch = require('jest-fetch-mock');

describe('sagas', () => {
    describe('media', () => {
        it('should call data from the api', () => {
            const action = {type: types.SEARCH_MEDIA_REQUEST, payload: "world"};
            const images = [{
                id: "38111730024",
                title: "How Many Gallons in Lake Michigan and Other Facts",
                mediaUrl: "https://farm5.staticflickr.com/4563/38111730024_ec2c6dbe10.jpg"
            }];
            const images2 = [];
            const videos = [{}];

            // return expectSaga(searchMediaSaga, action)
            //     .put({type: types.SELECTED_IMAGE, image: images[0]})
            //     .dispatch({type: types.SEARCH_MEDIA_REQUEST, payload: 'rain'})
            //     .run()

            const gen = searchMediaSaga(action);

            expect(call(shutterStockVideos, action.payload)).toEqual(gen.next().value);
            expect(call(flickrImages, action.payload)).toEqual(gen.next(videos).value);

            expect(put({type:types.SHUTTER_VIDEOS_SUCCESS, videos})).toEqual(gen.next(images).value);
            expect(put({type:types.SELECTED_VIDEO, video: videos[0]})).toEqual(gen.next().value);
            expect(put({type:types.FLICKR_IMAGES_SUCCESS, images: images2})).toEqual(gen.next().value);
            expect(put({type:types.SELECTED_IMAGE, image: images[0]})).toEqual(gen.next().value);

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