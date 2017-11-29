import counterReducer from '../counterReducer';
import imageReducer from '../imageReducer';
import * as types from '../../constants/actionTypes';

describe('reducers', () => {
    describe('counter', () => {
        it('should return initial state', () => {
            expect(counterReducer(undefined, {})).toEqual(0);
        });

        it('should handle COUNTER_INCREMENT', () => {
            expect(counterReducer(0, {
                type: types.COUNTER_INCREMENT
            })).toEqual(1);

            expect(counterReducer(1, {
                type: types.COUNTER_INCREMENT
            })).toEqual(2)
        });

        it('should handle COUNTER_DECREMENT', () => {
            expect(counterReducer(1, {
                type: types.COUNTER_DECREMENT
            })).toEqual(0);

            expect(counterReducer(0, {
                type: types.COUNTER_DECREMENT
            })).toEqual(-1);
        });
    });

    describe('image', () => {
        it('should return inital state', () => {
            expect(imageReducer(undefined, {})).toEqual([])
        });

        it('should handle SELECTED_IMAGE', () => {
            expect(
                imageReducer([], {
                    type: types.SELECTED_IMAGE,
                    image: {
                        id: 1,
                        name: 'image'
                    }
                })
            ).toEqual({
                selectedImage: {
                    id: 1,
                    name: 'image'
                }
            });

            expect(
                imageReducer({
                    selectedImage: {
                        id: 1,
                        name: 'image'
                    }
                }, {
                    type: types.SELECTED_IMAGE,
                    image: {
                        id: 2,
                        name: 'image2'
                    }
                })
            ).toEqual({
                selectedImage: {
                    id: 2,
                    name: 'image2'
                }
            });
        });
    });
});