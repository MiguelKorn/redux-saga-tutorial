import {combineReducers} from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
    images,
    videos,
    counter
});

export default rootReducer;