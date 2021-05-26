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
            //to return searched templates based on the category being filtered
            let searchedTemplates = state.templates?.filter(template => state.filterBy === 'All' || template.category.includes(state.filterBy) ? template.name.toLowerCase().includes(action.payload) : null );

            return {
                ...state,
                activeTemplates: searchedTemplates,
            }
        
        case ACTION.SORT_TEMPLATES_BY_NAME_ORDER:
            function dynamicsort(property,order) {
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

            return {
                ...state,
                activeTemplates: state.activeTemplates.sort(dynamicsort("name", action.payload.toLowerCase())),
            };

        case ACTION.SORT_TEMPLATES_BY_DATE_ORDER:
            function dynamicSort(property,order) {
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

            return {
                ...state,
                activeTemplates: state.activeTemplates.sort(dynamicSort("created", action.payload.toLowerCase())),
            };

        default:
            return state;
    }

}

export default templateReducer