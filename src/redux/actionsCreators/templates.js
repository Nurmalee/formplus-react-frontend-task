import axios from 'axios'
import * as ACTION from '../constants'

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