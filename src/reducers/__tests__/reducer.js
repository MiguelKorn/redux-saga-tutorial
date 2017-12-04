import counterReducer from '../counterReducer';
import imageReducer from '../imageReducer';
import videoReducer from "../videoReducer";
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

        it('should handle FLICKR_IMAGES_SUCCESS', () => {
            expect(
                imageReducer([], {
                    type: types.FLICKR_IMAGES_SUCCESS,
                    images: [
                        {id: 1, name: 'image1'},
                        {id: 2, name: 'image2'}
                    ]
                })).toEqual([[
                    {id: 1, name: 'image1'},
                    {id: 2, name: 'image2'}
                ]]
            );
        });
    });
});

describe('video', () => {
    it('should return inital state', () => {
        expect(videoReducer(undefined, {})).toEqual([])
    });

    it('should handle SELECTED_VIDEO', () => {
        expect(
            videoReducer([], {
                type: types.SELECTED_VIDEO,
                video: {
                    id: 1,
                    name: 'video'
                }
            })
        ).toEqual({
            selectedVideo: {
                id: 1,
                name: 'video'
            }
        });

        expect(
            videoReducer({
                selectedVideo: {
                    id: 1,
                    name: 'video'
                }
            }, {
                type: types.SELECTED_VIDEO,
                video: {
                    id: 2,
                    name: 'video2'
                }
            })
        ).toEqual({
            selectedVideo: {
                id: 2,
                name: 'video2'
            }
        });
    });

    it('should handle SHUTTER_VIDEOS_SUCCESS', () => {
        expect(
            videoReducer([], {
                type: types.SHUTTER_VIDEOS_SUCCESS,
                videos: [
                    {id: 1, name: 'video1'},
                    {id: 2, name: 'video2'}
                ]
            })).toEqual([[
                {id: 1, name: 'video1'},
                {id: 2, name: 'video2'}
            ]]
        );
    });
});