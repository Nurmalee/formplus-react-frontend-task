import * as ACTION from '../constants/pagination'

const initialState = {
    currentPage: 1,
    itemsPerPage: 15
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }

        case ACTION.PREVIOUS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        
        case ACTION.PAGE_TARGET:
            return {
                ...state,
                currentPage: action.payload
            }
    
        default:
            return state;
    }
}

export default paginationReducer

