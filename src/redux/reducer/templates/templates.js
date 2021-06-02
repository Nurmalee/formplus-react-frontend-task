import * as ACTION from '../../constants/templates'

const sortDynamically = (property,order) => {
    return function (a, b){
        // a should come before b in the sorted order
        if(order === "ascending" && (a[property] < b[property])){
            return -1;
        } 
        else if (order === "ascending" && (a[property] > b[property])){
            return 1;
        }
        // a should come after b in the sorted order
        else if(order === "descending" && (a[property] > b[property])){
            return -1;
        } 
        else if (order === "descending" && (a[property] < b[property])){
            return 1;
        }
        // a and b are the same
        else {
            return 0;
        }
    }
}

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
                activeTemplates: action.payload,
                filterBy: 'All'
            }

        case ACTION.FETCH_TEMPLATES_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        case ACTION.FILTER_TEMPLATES:
            //TO RETURN FILTERED TEMPLATES BASED ON CATEGORY CLICKED
            let filteredTemplates = state.templates?.filter(template => action.payload === "All" ? template : template.category.includes(action.payload));

            return {
                ...state,
                activeTemplates: filteredTemplates,
                filterBy: action.payload
            }
        
        case ACTION.SEARCH_TEMPLATES_BY_NAME:
            //TO RETURN SEARCHED TEMPLATES BASED ON CATEGORY BEING FILTERED TO
            let searchedTemplates = state.templates?.filter(template => state.filterBy === 'All' || template.category.includes(state.filterBy) ? template.name.toLowerCase().includes(action.payload) : null );

            return {
                ...state,
                activeTemplates: searchedTemplates
            }
        
        case ACTION.SORT_TEMPLATES_BY_NAME_ORDER:
            //TO RETURN ORDERED TEMPLATES BY NAME BASED ON CATEGORY BEING FILTERED TO
            let sortedTemplatesByName = state.templates?.filter(template => state.filterBy === 'All' || template.category.includes(state.filterBy) ? template : null)

            sortedTemplatesByName = sortedTemplatesByName.sort(sortDynamically("name", action.payload.toLowerCase()))

            return {
                ...state,
                activeTemplates: sortedTemplatesByName,
            };

        case ACTION.SORT_TEMPLATES_BY_DATE_ORDER:
            //TO RETURN ORDERED TEMPLATES BY DATE BASED ON CATEGORY BEING FILTERED TO
            let sortedTemplatesByDate = state.templates?.filter(template => state.filterBy === 'All' || template.category.includes(state.filterBy) ? template : null)
            
            sortedTemplatesByDate = sortedTemplatesByDate.sort(sortDynamically("created", action.payload.toLowerCase()))

            return {
                ...state,
                activeTemplates: sortedTemplatesByDate,
            };

        default:
            return state;
    }
}

export default templateReducer