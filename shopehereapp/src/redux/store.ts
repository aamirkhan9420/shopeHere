import { thunk} from 'redux-thunk'
import {productReducer } from './reducer/reducer'
import {legacy_createStore, applyMiddleware} from 'redux'

export const store = legacy_createStore(productReducer,applyMiddleware(thunk))
export type TypeOfStore = ReturnType<typeof store.getState>
export type TypeOfDispatch = typeof store.dispatch