import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {filterTemplates} from '../redux/actionsCreators/templates'

const DropDown = ({legend, options}) => {

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(filterTemplates(e.target.value))
    }

    return (
        <DropDownFieldSet>
            <legend>{legend}</legend>
            <select onChange={handleSelect}>
                {
                   options?.map((link, index) => <option key={index} value={link}>{link}</option>) 
                }
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
        margin-left: 15px;
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
