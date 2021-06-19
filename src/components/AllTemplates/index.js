import { TemplatesHeader, TemplateCategory, TemplateCount, ErrorNote, TemplatesGrid, NoSearchMatchesFound } from './styles'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTemplates } from '../../redux/actionsCreators/templates'
import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { styles } from '../../styles/styles'
import '../../styles/styles.css'
import SingleTemplate from '../SingleTemplate'
import TemplateSkeleton from '../../skeletons/TemplateSkeleton'

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
                    {loading ? '' : error || activeTemplates?.length < 1 ? 'No' : activeTemplates?.length}
                    {loading ? 'Loading templates' : activeTemplates?.length <= 1 ? ' template' : ' templates' }
                </TemplateCount>

            </TemplatesHeader>

            {
                loading ? 
                    // <LoadingImage>
                    //     <CubeTransparentIcon className="loading" /> 
                    //     <p>loading templates...</p>
                    // </LoadingImage>
                    
                    <TemplatesGrid>
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => <TemplateSkeleton key={n} />)} 
                    </TemplatesGrid>  : 
                error ? 
                    <ErrorNote>
                        <ExclamationCircleIcon style={styles.largeIcon} />
                        <p>{error}</p> 
                    </ErrorNote> :
          
                <TemplatesGrid data-test='templatesGrid'>
                    {currentTemplates?.map((template, index) => <SingleTemplate key={index} {...template} />)} 
                </TemplatesGrid>    
            }
 
            {(!loading && activeTemplates?.length === 0) && 
                <NoSearchMatchesFound>
                    <QuestionMarkCircleIcon style={styles.largeIcon} />
                    <p>No matches found for your search</p>
                </NoSearchMatchesFound>
            }
        </>
    )
}

export default Templates