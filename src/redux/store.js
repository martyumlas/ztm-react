import rootReducer from './root-reducer'
import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.sagas'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(...middlewares)))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)

