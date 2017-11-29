import counterReducer from '../reducers/counterReducer';
import imageReducer from '../reducers/imageReducer';
import * as types from '../constants/actionTypes';

const imagesList1 = [
    {
        id:  1,
        name: 'image1'
    },
    {
        id:  2,
        name: 'image2'
    },
    {
        id:  3,
        name: 'image3'
    }
];
const imagesList2 = [
    {
        id:  4,
        name: 'image4'
    },
    {
        id:  5,
        name: 'image5'
    },
    {
        id:  6,
        name: 'image6'
    }
];

describe('reducers', () => {
    describe('counter', () => {
        it('should return initial state', () => {
            expect(counterReducer(undefined, {})).toEqual(0);
        });

        it('should handle COUNTER_INCREMENT', () => {
            expect(counterReducer([], {
                type: types.COUNTER_INCREMENT
            })).toEqual("1");

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