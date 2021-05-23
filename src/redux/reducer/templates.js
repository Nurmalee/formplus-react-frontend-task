import * as ACTION from '../constants'
  
const templateReducer = (state = {templates:[], activeTemplates: [], searchTerm: ''}, action) => {
    switch (action.type) {
        case ACTION.FETCH_TEMPLATES_LOADING:
            return {
                ...state,
                loading: true,
                templates: []
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
            let searchedTemplates = state.templates.filter(template => template.category.includes(action.payload));

            if(!action.payload || action.payload === 'All'){
                return {
                    ...state,
                    activeTemplates: state.templates,
                    searchTerm: 'all'
                }
            }

            if(action.payload){
                return {
                    ...state,
                    activeTemplates: searchedTemplates,
                    searchTerm: action.payload
                }
            }

            break;
    
        default:
            return state;
    }

}

export default templateReducer