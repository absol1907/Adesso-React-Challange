import {configureStore} from '@reduxjs/toolkit';
import  createSagaMiddleware from 'redux-saga';

import unitsReducer from '../reducers/unitsReducer';
import  rootSaga  from "../sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        filter: unitsReducer,
    },
    middleware: [sagaMiddleware],
});


sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;