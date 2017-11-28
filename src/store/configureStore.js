import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleWare();
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleWare)),
        runSaga: sagaMiddleWare.run(rootSaga)
    }
};

export default configureStore;