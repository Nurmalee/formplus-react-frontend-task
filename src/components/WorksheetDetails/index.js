import { Link } from 'react-router-dom'
import { WorksheetDetailsContainer, WorksheetImage, WorksheetDesc } from './styles'

const WorksheetDetails = () => {

    const {image, bigImage, description, title, Subjects, Level, Topics} = JSON.parse(localStorage.getItem('worksheetDetails'))

    return (
        <WorksheetDetailsContainer>
            <Link to="/worksheets"> <button>back to worksheets</button> </Link>
            <h2>{title}</h2>
            <div>
                <WorksheetImage>
                    <img src={image || bigImage} alt="" />
                </WorksheetImage>

                <WorksheetDesc>
                    <p> Level: <span>{Level}</span> </p>
                    <p> Subject: <span>{Subjects}</span> </p>
                    <p> Topic: <span>{Topics}</span> </p>
                    <p> Description: <span>{description}</span> </p>
                    <button>Download Worksheet</button>
                </WorksheetDesc>
            </div>
            
        </WorksheetDetailsContainer>
    )
}

export default WorksheetDetails