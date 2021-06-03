import styled from 'styled-components'
import { styles } from '../../styles/styles'

export const PaginationContainer = styled.div`
    width: ${styles.containerWidth};
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul {
        list-style: none;
        flex-wrap: wrap;

        > li {
            border: 1px solid ${props => props.theme.borderColor};
            border-radius: 3px;
            color: ${props => props.theme.textColor};
            padding: 3px 10px;
            cursor: pointer;
            margin-right: 3px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    > button {
        display: flex;
        padding: 12px;
        border: none;
        background-color: transparent;
        color: ${props => props.theme.textColor};
        font-size: 11px;
        cursor: pointer;
        text-transform: capitalize;

        &:disabled {
            color: #ddd;
        }

        @media screen and (min-width: 700px){
            font-size: 13px;
            padding: 12px 20px;
        }
    }
`

export const ScreenPagination = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BackToStart = styled.div`
    cursor: pointer;
    font-size: 11px;
    margin-top: 40px;
    text-align: center;
    text-transform: capitalize;
    padding-left: 17px;
    color: ${props => props.theme.textColor};
`