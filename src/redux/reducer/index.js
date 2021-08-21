import { combineReducers } from 'redux'
import templateReducer from './templates/templates'
import paginationReducer from './pagination/pagination'
import worksheetsReducer from './worksheets/worksheets'

const reducers = combineReducers({
    templates: templateReducer,
    pagination: paginationReducer,
    worksheets: worksheetsReducer,
})

export default reducers