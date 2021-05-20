import {combineReducers} from 'redux'
import templateReducer from './templates'

const reducers = combineReducers({
    templates: templateReducer,
})

export default reducers