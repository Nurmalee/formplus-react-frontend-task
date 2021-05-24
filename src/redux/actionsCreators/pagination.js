import * as ACTION from '../constants/pagination'

export const nextPage = () => {
    return({type: ACTION.NEXT_PAGE})
}

export const previousPage = () => {
    return({type: ACTION.PREVIOUS_PAGE})
}

export const pageNumberClick = (buttonId) => {
    return({type: ACTION.PAGE_TARGET, payload: buttonId})
}