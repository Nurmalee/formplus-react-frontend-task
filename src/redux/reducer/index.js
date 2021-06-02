import { combineReducers } from 'redux'
import templateReducer from './templates/templates'
import paginationReducer from './pagination/pagination'

const reducers = combineReducers({
    templates: templateReducer,
    pagination: paginationReducer,
})

export default reducers