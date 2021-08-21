import styled from 'styled-components'

export const DropDownFieldSet = styled.fieldset`
    font-size: 9px;
    border: 1px solid #777;
    border-radius: 2px;

    > legend {
        padding: 0 2px;
        margin-left: 17px;
        text-transform: capitalize;
        color: #AAA;
    }

    > select {
        border: none;
        outline: none;
        padding: 3px 7px 7px 15px;
        background-color: transparent;
        font-size: 13px;
        width: 96%;
        text-transform: capitalize;
        color: ${props => props.theme.textColor};

        > option {
            color: #444;

            &:checked { 
                background-color: #FFF4EA;
            }
        }
    }
`