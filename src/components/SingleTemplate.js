import styled from 'styled-components'

const SingleTemplate = ({description, link, name}) => {
    return (
        <TemplateBox>
            <h2>{name}</h2>
            <p>{description}. This description doesn't contain enough words for proper design rendering so I have decided to inclue this joker.. Hope you don't mind </p>
            <a href={link}>use template</a>
        </TemplateBox>
    )
}

export default SingleTemplate

const TemplateBox = styled.div`
    box-shadow: 7px 7px 10px rgb(250, 250, 250);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    border: 1px solid #ddd;
    transition: 500ms;
    align-self: flex-start;

    &:hover {
        border: 1px solid limegreen;
        transform: scale(1.05);
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
        color: limegreen;
        font-size: 12px;
        font-weight: 500;
        padding: 10px 15px;
        text-transform: capitalize;
        text-decoration: none;
        background-color: rgb(250, 250, 250);
        display: block;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`
