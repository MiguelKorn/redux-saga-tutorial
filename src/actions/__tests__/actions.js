import * as counterActions from '../counterActions';
import * as mediaActions from '../mediaActions';
import * as types from '../../constants/actionTypes';

describe('actions', () => {
    describe('media', () => {
        it('should create an action to return search query', () => {
            const payload = 'rain';
            const expectedAction = {
                type: types.SEARCH_MEDIA_REQUEST,
                payload
            };
            expect(mediaActions.searchMediaAction(payload)).toEqual(expectedAction);
        });

        it('should create an action to return an image', () => {
            const image = {};
            const expectedAction = {
                type: types.SELECTED_IMAGE,
                image
            };
            expect(mediaActions.selectImageAction(image)).toEqual(expectedAction);
        });

        it('should create an action to return an video', () => {
            const video = {};
            const expectedAction = {
                type: types.SELECTED_VIDEO,
                video
            };
            expect(mediaActions.selectVideoAction(video)).toEqual(expectedAction);
        });
    });

    describe('counter', () => {
        it('should create an action to increment the counter', () => {
            expect(counterActions.counterIncrement()).toEqual({type: types.COUNTER_INCREMENT});
        });

        it('should create an action to decrement the counter', () => {
            expect(counterActions.counterDecrement()).toEqual({type: types.COUNTER_DECREMENT});
        });

        it('should create an action to async increment the counter', ()=>{
            expect(counterActions.counterIncrementAsync()).toEqual({type: types.COUNTER_INCREMENT_ASYNC})
        });
    });
});