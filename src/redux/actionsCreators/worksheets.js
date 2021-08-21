import axios from 'axios'
import * as ACTION from '../constants/worksheets'

setTimeout(() => {
    localStorage.removeItem('worksheets')
}, 1800000)

const URL = 'https://nimdeewksht.sandbox.9ijakids.com/test-api.php/GetAllWorksheets'

export const fetchWorksheets = () => async (dispatch) => {
    dispatch({type: ACTION.FETCH_WORKSHEETS_LOADING})
    try {
        const response = await axios.get(URL)
        dispatch({type: ACTION.FETCH_WORKSHEETS_SUCCESS, payload: response.data.data})
        localStorage.setItem("worksheets", JSON.stringify(response.data.data))
    } catch (error) {
        dispatch({type: ACTION.FETCH_WORKSHEETS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}

export const filterWorksheets = (filterBy) => {
    return({type: ACTION.FILTER_WORKSHEETS, payload: filterBy})
}

export const searchedWorksheets = (worksheetName) => {
    return({type: ACTION.SEARCH_WORKSHEETS_BY_TITLE, payload: worksheetName})
}