import * as ACTION from '../constants'

const paginationReducer = (state = { currentPage: 1, itemsPerPage: 9}, action) => {
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

