import styled from 'styled-components'

const DropDown = () => {
    return (
        <DropDownFieldSet>
            <legend>DropDown</legend>
            <select>
                <option>All</option>
                <option>Health</option>
                <option>E-commerce</option>
                <option>Education</option>
            </select>
            
        </DropDownFieldSet>
    )
}

export default DropDown

const DropDownFieldSet = styled.fieldset`
    /* width: fit-content; */
    font-size: 9px;
    border: 1px solid;
    border-radius: 2px;
    color: #C4C4C4;

    > legend {
        padding: 0 2px;
        margin-left: 15px;
        font-family: 'Poppins', sans-serif;
    }

    > select {
        border: none;
        outline: none;
        padding: 3px 7px 7px 15px;
        background-color: transparent;
        font-size: 13px;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }
`
