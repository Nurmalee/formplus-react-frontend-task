import styled from 'styled-components'
import { styles } from '../../styles/styles'

export const HeaderContainer = styled.div`
    background-color: white;
    z-index: 100;
    /* border: 1px solid; */
    padding: 5px 0;

    > h1 {
        text-align: center;
        color: #777;
        padding: 10px 0;
    }

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
    padding-top: 20px;

    @media screen and (min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HeaderSearch = styled.div`
    border: 1px solid #777;
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
            border: 2px solid #777;
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

    @media screen and (min-width: 600px) {
        margin-left: 10px;
        grid-template-columns: 0.25fr .5fr .5fr .5fr;
    }

    @media screen and (min-width: 800px) {
        grid-template-columns: 0.25fr .75fr .75fr .75fr;
    }

    @media screen and (min-width: 1100px) {
        grid-template-columns: 0.25fr 1fr 1fr 1fr;
    }

`
