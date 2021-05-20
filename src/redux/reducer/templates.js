import * as ACTION from '../constants'
  
const templateReducer = (state = {templates:[]}, action) => {
    switch (action.type) {
        case ACTION.FETCH_TEMPLATES_LOADING:
            return {
                loading: true,
                templates: []
            }

        case ACTION.FETCH_TEMPLATES_SUCCESS:
            return {
                loading:false,
                templates: action.payload
            }

        case ACTION.GET_ALL_PRODUCTS_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        case ACTION.FILTER_TEMPLATES:
            return templates
    
        default:
            return templates;
    }

}

export default templateReducer