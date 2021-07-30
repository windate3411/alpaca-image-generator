import { combineReducers } from 'redux'
import bodyPartReducer from './bodyPart'

const reducers = combineReducers({ bodyPart: bodyPartReducer })

export default reducers

export type State = ReturnType<typeof reducers>
