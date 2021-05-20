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
    padding: 2px 7px 5px 10px;
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    color: #C4C4C4;

    > legend {
        padding: 0 2px;
        margin-left: 2px;
        font-family: 'Poppins', sans-serif;
    }

    > select {
        border: none;
        outline: none;
        font-size: 13px;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }
`
