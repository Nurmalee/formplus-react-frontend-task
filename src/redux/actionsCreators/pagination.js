import * as ACTION from '../constants'

export const nextPage = () => async(dispatch) => {
    dispatch({type: ACTION.NEXT_PAGE})
}

export const previousPage = () => async(dispatch) => {
    dispatch({type: ACTION.PREVIOUS_PAGE})
}

export const pageNumberClick = (buttonId) => async(dispatch) => {
    dispatch({type: ACTION.PAGE_TARGET, payload: buttonId})
}