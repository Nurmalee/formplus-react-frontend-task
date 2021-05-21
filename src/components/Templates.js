import styled from 'styled-components'
import {templateData} from '../templateData'
import SingleTemplate from './SingleTemplate'

const Templates = ({loading, error,  templates }) => {

    return (
        <>  
            <TemplatesHeader>
                <TemplateCategory>all templates</TemplateCategory>
                <TemplateCount>
                    {templateData.length}
                    {templateData.length === 1 ? ' template' : ' templates' }
                </TemplateCount>
            </TemplatesHeader>

            {/* {
                loading ? <p>LOADING</p> : error ? <p>{error}</p> :
          
                <TemplatesGrid>
                    {
                        templateData.map((template, index) => {
                            return (
                                <SingleTemplate key={index} {...template} />
                            )
                        })
                    }
                </TemplatesGrid>
            
            } */}
          
                <TemplatesGrid>
                    {
                        templateData.map((template, index) => {
                            return (
                                <SingleTemplate key={index} {...template} />
                            )
                        })
                    }
                </TemplatesGrid>
        </>
    )
}

export default Templates

const TemplatesHeader = styled.div`
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
`

const TemplateCategory = styled.p`
    font-weight: 500;
    font-size: 14px;
`

const TemplateCount = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #C4C4C4;
`


const TemplatesGrid = styled.section`
    display: grid;
    gap: 40px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
