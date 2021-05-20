import styled from 'styled-components'
import {templateData} from '../templateData'
import SingleTemplate from './SingleTemplate'

const Templates = () => {
    return (
        <>
            <TemplateCategory>all templates</TemplateCategory>
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

const TemplateCategory = styled.header`
    font-size: 12px;
    text-transform: capitalize;
    padding-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
`

const TemplatesGrid = styled.section`
    display: grid;
    gap: 30px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
