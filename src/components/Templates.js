import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTemplates} from '../redux/actionsCreators/templates'

import styled from 'styled-components'
import SingleTemplate from './SingleTemplate'

import {ExclamationCircleIcon} from '@heroicons/react/outline'

const Templates = () => {

    const dispatch = useDispatch()
    const {activeTemplates, filterBy, loading, error} = useSelector(state => state.templates)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    useEffect(() => {
        dispatch(fetchTemplates())
    }, [dispatch])

    const indexOfLastTemplate = (currentPage * itemsPerPage) - 1;
    const indexOfFirstTemplate = indexOfLastTemplate - (itemsPerPage - 1);
    const currentTemplates = activeTemplates?.slice(indexOfFirstTemplate, (indexOfLastTemplate + 1))

    return (
        <>  
            <TemplatesHeader>

                <TemplateCategory> {!filterBy ? 'all templates' : `${filterBy} templates`}</TemplateCategory>
                
                <TemplateCount>
                    {loading ? '' : activeTemplates?.length}
                    {loading ? 'loading templates' : activeTemplates?.length <= 1 ? ' template' : ' templates' }
                </TemplateCount>

            </TemplatesHeader>

            {
                loading ? 
                    <LoadingImage>
                        <img src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif" alt="loading"/> <p>loading templates...</p> 
                    </LoadingImage> : 
                error ? 
                    <ErrorNote>
                        <ExclamationCircleIcon style={{height: "100px", color: "#777"}} /> <p>{error}</p> 
                    </ErrorNote> :
          
                <TemplatesGrid>
                    { 
                       currentTemplates.map((template, index) => {
                            return (
                                <SingleTemplate key={index} {...template} />
                            )
                        })
                    }
                </TemplatesGrid>  
            }
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

const LoadingImage = styled.div`
    text-align: center;

    > img {
        height: 250px;
    }
`


const ErrorNote = styled.div`
    text-align: center;
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