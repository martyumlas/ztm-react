import rootReducer from './root-reducer'
import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = []

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

