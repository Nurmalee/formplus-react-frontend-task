import {combineReducers} from 'redux'
import templateReducer from './templates'
import paginationReducer from './pagination'

const reducers = combineReducers({
    templates: templateReducer,
    pagination: paginationReducer,
})

export default reducers