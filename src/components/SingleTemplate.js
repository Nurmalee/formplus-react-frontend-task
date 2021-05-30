import styled from 'styled-components'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { styles } from '../styles'

const SingleTemplate = ({description, link, name}) => {
    return (
        <TemplateBox>
            <h2>{name}</h2>
            <p>{description}. This description doesn't contain enough words for proper design rendering so I have decided to inclue this joker.. Hope you don't mind </p>
            <a href={link}>use template <ArrowNarrowRightIcon style={styles.searchIcon} /> </a>
        </TemplateBox>
    )
}

export default SingleTemplate

const TemplateBox = styled.div`
    box-shadow: 0px 4px 20px ${props => props.theme.boxShadow};
    border-radius: 5px;
    border: 2px solid transparent;
    transition: 100ms;
    align-self: flex-start;
    color: ${props => props.theme.textColor};
    cursor: pointer;

    &:hover {
        border: 2px solid ${props => props.theme.textColor};;
        /* transform: scale(1.03); */
    }

    > h2 {
        padding: 15px;
        padding-bottom: 0;
        font-size: 15px;
        font-weight: 500;
        text-transform: capitalize;
    }

    > p {
        font-size: 12px;
        padding: 10px 15px;
        padding-bottom: 30px;
    }

    > a {
        color: green;
        font-size: 12px;
        font-weight: 500;
        padding: 10px 15px;
        text-transform: capitalize;
        text-decoration: none;
        background-color: rgb(250, 250, 250);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
`
