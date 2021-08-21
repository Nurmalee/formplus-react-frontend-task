import styled from 'styled-components'

const SingleWorksheet = ({image, bigImage, description, title}) => {
    return (
        <WorksheetWrapper>
            <WorksheetImage>
                <img src={image || bigImage} alt={`${title}_image`} />
            </WorksheetImage>
            <WorksheetInfo>
                <h3>{title}</h3>
                <p>{description.length > 70 ? `${description.substring(0, 70)}...` : description}</p>
            </WorksheetInfo>
            <ButtonContainer>
                <button>Download</button>
            </ButtonContainer>
        </WorksheetWrapper>
    )
}

export default SingleWorksheet

const WorksheetWrapper = styled.div`
    border-radius: 3px;
    /* box-shadow: 0px 4px 10px teal; */
    box-shadow: 0px 5px 10px #ccc;
    position: relative;

    :hover {
        > div:nth-child(3){
            visibility: visible;
        }

    }
`

const WorksheetInfo = styled.div`
    padding: 10px 25px;
    text-align: center;

    > h3 {
        padding: 5px 0;
        font-weight: 600;
        font-size: 16px;
        border-top: 2px solid #999;
    }

    > p {
        padding: 5px 0;
        font-size: 14px;
    }
`

const WorksheetImage = styled.div`
    height: 200px;
    width: 100%;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;

    > img {
        object-fit: fill;
        height: 100%;
        width: 100%;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }
`

const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom : 0;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    visibility: hidden;

    > button {
        padding: 10px 15px;
        background-color: brown;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`
