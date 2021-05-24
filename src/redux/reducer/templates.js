import * as ACTION from '../constants/templates'

const initialState = {
    templates: [],
    activeTemplates: [],
    filterBy: ''
}
  
const templateReducer = (state = initialState, action) => {
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
            let selectedTemplates = state.templates.filter(template => template.category.includes(action.payload));

            if(!action.payload || action.payload === 'All'){
                return {
                    ...state,
                    activeTemplates: state.templates,
                    filterBy: 'all'
                }
            }

            if(action.payload){
                return {
                    ...state,
                    activeTemplates: selectedTemplates,
                    filterBy: action.payload
                }
            }
            return state;
    
        default:
            return state;
    }

}

export default templateReducer


   // let searchedTemplates = state.templates.filter(template => {
            //     if (template.category.filter(cat => cat.toLowerCase().includes(action.payload))){
            //         return template
            //     } else {
            //         return null
            //     }
            // });