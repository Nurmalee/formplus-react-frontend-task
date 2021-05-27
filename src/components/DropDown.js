import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'

import {filterTemplates, orderByName, orderByDate} from '../redux/actionsCreators/templates'

const DropDown = ({legend, options}) => {

    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.templates)

    const handleSelect = (e) => {
        let selectedOption = e.target.value
        if(legend === 'categories'){
            dispatch(filterTemplates(selectedOption))
        }
        if(legend === 'order'){
            dispatch(orderByName(selectedOption))
        }
        if(legend === 'date'){
            dispatch(orderByDate(selectedOption))
        }
       
    }

    return (
        <DropDownFieldSet disabled={loading || error}>
            <legend>{legend}</legend>
            <select onChange={handleSelect}>
                {options?.map((link, index) => <option key={index} value={link}>{link}</option>)}
            </select>            
        </DropDownFieldSet>
    )
}

export default DropDown

const DropDownFieldSet = styled.fieldset`
    font-size: 9px;
    border: 1px solid;
    border-radius: 2px;
    color: #C4C4C4;

    > legend {
        padding: 0 2px;
        margin-left: 17px;
        text-transform: capitalize;
        color: #555;
    }

    > select {
        border: none;
        outline: none;
        padding: 3px 7px 7px 15px;
        background-color: transparent;
        font-size: 13px;
        width: 96%;
        text-transform: capitalize;
    }
`
