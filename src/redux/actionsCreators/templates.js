import axios from 'axios'
import * as ACTION from '../constants/templates'

const URL = 'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'

export const fetchTemplates = () => async (dispatch) => {
    dispatch({type: ACTION.FETCH_TEMPLATES_LOADING})
    try {
        const {data} = await axios.get(URL)
        dispatch({type: ACTION.FETCH_TEMPLATES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ACTION.FETCH_TEMPLATES_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
        console.log(error);
    }
}

export const filterTemplates = (filterBy) => {
    return({type: ACTION.FILTER_TEMPLATES, payload: filterBy})
}


export const searchedTemplates = (templateName) => {
    return({type: ACTION.SEARCH_TEMPLATES_BY_NAME, payload: templateName})
}