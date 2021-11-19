import rootReducer from './root-reducer'
import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'



const store = createStore(rootReducer, applyMiddleware(logger))

export default store
