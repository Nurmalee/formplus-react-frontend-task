import styled from 'styled-components'
import { styles } from '../../styles/styles'

export const TemplatesHeader = styled.div`
    padding-bottom: 20px;
    width: ${styles.containerWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    justify-content: space-between;
    color: ${props => props.theme.textColor};
`

export const TemplateCategory = styled.p`
    font-weight: 500;
    font-size: 14px;
`

export const TemplateCount = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #C4C4C4;
    text-transform: capitalize;
`

export const LoadingImage = styled.div`
    text-align: center;
    margin: 40px 0 20px 0;

    > p {
        color: ${props => props.theme.textColor};
    }

    > img {
        height: 230px;
        object-fit: contain;
    }
`

export const ErrorNote = styled.div`
    text-align: center;
    margin: 40px 0 20px 0;

    > p {
        color: ${props => props.theme.textColor};
    }
`

export const TemplatesGrid = styled.section`
    width: 90vw;
    margin: 0 auto;
    display: grid;
    gap: 40px;

    @media screen and (min-width: 550px) {
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 900px) {
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
        /* grid-template-columns: repeat(3, 1fr); */
        grid-template-columns: repeat(4, 1fr);
    }
`

export const NoSearchMatchesFound = styled.div`
    text-align: center;
    margin: 40px 0 20px 0;

    > p {
        color: ${props => props.theme.textColor};
    }
`