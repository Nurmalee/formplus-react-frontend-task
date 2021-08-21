import * as ACTION from '../../constants/worksheets'

const initialState = {
    worksheets: [],
    loading: true,
    filterBy: 'All'
}

const worksheetsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ACTION.FETCH_WORKSHEETS_LOADING:
            return { ...state }
        
        case ACTION.FETCH_WORKSHEETS_SUCCESS:
            return {
                ...state,
                loading:false,
                worksheets: payload,
                activeWorksheets: payload,
            }

        case ACTION.FETCH_WORKSHEETS_FAILED:
            return {
                loading: false,
                error: payload
            }

        case ACTION.FILTER_WORKSHEETS:
            //TO RETURN FILTERED TEMPLATES BASED ON CATEGORY CLICKED
            let filteredWorksheets = state.worksheets?.filter(worksheet => payload === "All" ? worksheet : worksheet.Level.includes(payload) || worksheet.Subjects.includes(payload) || worksheet.Topics.includes(payload));

            return {
                ...state,
                activeWorksheets: filteredWorksheets,
                filterBy: payload,
                searchTerm: ''
            }

        case ACTION.SEARCH_WORKSHEETS_BY_TITLE:
            //TO RETURN SEARCHED TEMPLATES BASED ON CATEGORY BEING FILTERED TO
            let searchedWorksheet = state.worksheets?.filter(worksheet => state.filterBy === 'All' || worksheet.Level.includes(state.filterBy) || worksheet.Subjects.includes(state.filterBy) || worksheet.Topics.includes(state.filterBy) ? worksheet.title.toLowerCase().includes(payload) : null );

            //INCASE WE WANT TO INCLUDE ALONG SIDE THE ABOVE SEARCH BY TOPICS AND/OR SUBJETCS  
            // || worksheet.Topics.toLowerCase().includes(payload) || worksheet.Subjects.toLowerCase().includes(payload)

            return {
                ...state,
                activeWorksheets: searchedWorksheet,
                searchTerm: payload
            }
        default:
            return state
    }
}


export default worksheetsReducer
