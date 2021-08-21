import { Link } from 'react-router-dom'
import { WorksheetWrapper, WorksheetInfo, WorksheetImage, ButtonContainer } from './styles'

const SingleWorksheet = ({worksheet}) => {
    const {id, image, bigImage, description, title} = worksheet

    const handleViewWorksheetDetails = () => {
        localStorage.setItem('worksheetDetails', JSON.stringify(worksheet))
    }

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
                <Link to={`/worksheets/worksheet_details/${title.split(" ").join("_")}_${id}`}>
                    <button onClick={handleViewWorksheetDetails}>View Details</button>
                </Link> 
            </ButtonContainer>
        </WorksheetWrapper>
    )
}

export default SingleWorksheet
