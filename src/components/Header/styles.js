import styled from 'styled-components'
import { styles } from '../../styles/styles'

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    z-index: 100;

    @media screen and (min-width: 500px){
        position: sticky;
        top: 0;
        left: 0;
    }
`

export const HeaderMain = styled.div`
    width: ${styles.containerWidth};
    margin: 0 auto;
    padding: 20px 0;
    padding-top: 40px;

    @media screen and (min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HeaderSearch = styled.div`
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 2px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (min-width: 850px) {
        margin-bottom: 0;
    }

    > input {
        flex: 1;
        padding: 8px 5px;
        padding-left: 25px;
        font-size: 14px;
        border: 1px solid transparent;
        outline: none;
        width: 100%;

        &:focus {
            /* box-shadow: 0 0 10px #FFF4EA; */
            border: 1px solid brown;
        }
    }
`

export const HeaderDropDownContainer = styled.div`
    display: grid;
    gap: 10px;

    > p {
        font-size: 12px;
        text-transform: capitalize;
        align-self: center;
        color: #C4C4C4;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: 0.4fr 1fr 1fr 1fr;
    }

`

export const ThemeToggler = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;
    background-color: #111;
    z-index: 50;
    color: whitesmoke;
    cursor: pointer;
    box-shadow: 0 0 10px #555;
    border: 1px solid #777;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 10px;
    padding-left: 20px;;
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 9px;
        font-weight: 500;
    }
`
