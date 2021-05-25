import * as ACTION from '../constants/templates'

const initialState = {
    templates: [],
    activeTemplates: [],
    filterBy: 'All'
}
  
const templateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FETCH_TEMPLATES_LOADING:
            return {
                ...state,
                loading: true,
                templates: [],
            }

        case ACTION.FETCH_TEMPLATES_SUCCESS:
            return {
                ...state,
                loading:false,
                templates: action.payload,
                activeTemplates: action.payload
            }

        case ACTION.FETCH_TEMPLATES_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        case ACTION.FILTER_TEMPLATES:
            let selectedTemplates = state.templates?.filter(template => action.payload && action.payload === "All" ? template : template.category.includes(action.payload));

            return {
                ...state,
                activeTemplates: selectedTemplates,
                filterBy: action.payload
            }
        
        case ACTION.SEARCH_TEMPLATES_BY_NAME:
            let searchedTemplates = state.templates?.filter(template => state.filterBy === 'All' || template.category.includes(state.filterBy) ? template.name.toLowerCase().includes(action.payload) : null );

            return {
                ...state,
                activeTemplates: searchedTemplates,
            }
        
        case ACTION.SORT_TEMPLATES_BY_NAME_ORDER:
            return state;

        default:
            return state;
    }

}

export default templateReducer