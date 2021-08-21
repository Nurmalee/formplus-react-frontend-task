import styled from 'styled-components'

export const WorksheetDetailsContainer = styled.div`
    width: 90vw;
    margin: 0 auto;

    > h2 {
        text-align: center;
    }

    > div {
        /* border: 2px solid teal; */
        display: grid;
        gap: 20px;
        margin: 50px 0;

        @media screen and (min-width: 800px){
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export const WorksheetImage = styled.div`
    height: 400px;
    width: 100%;
    box-shadow: 0px 5px 10px #ccc;
    padding: 20px 0;
    border-radius: 10px;
    transition: 200ms;

    :hover {
        box-shadow: 0px 5px 15px #999;
        transform: scale(0.97);
    }

    > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

export const WorksheetDesc = styled.div`
    padding: 20px;

    > p {
        font-weight: 600;

        > span {
            font-weight: 300;
        }
    }

    > button {
        padding: 10px 15px;
        background-color: brown;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;

        :hover {
            background-color: red;
        }
    }
`
