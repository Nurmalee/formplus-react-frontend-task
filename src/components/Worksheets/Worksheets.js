import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorksheets } from '../../redux/actionsCreators/worksheets'
import { TemplatesHeader, TemplateCategory, TemplateCount, ErrorNote, TemplatesGrid, NoSearchMatchesFound } from '../AllTemplates/styles'
import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { styles } from '../../styles/styles'
import '../../styles/styles.css'
import SingleWorksheet from '../SingleWorksheet/SingleWorksheet'
// import WorksheetSkeleton from '../../skeletons/WorksheetSkeleton'
import TemplateSkeleton from '../../skeletons/TemplateSkeleton'

const Worksheets = () => {

    const dispatch = useDispatch()
    const {activeWorksheets, filterBy, loading, error} = useSelector(state => state.worksheets)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    console.log(activeWorksheets);

    useEffect(() => {
        dispatch(fetchWorksheets())
    }, [dispatch])

    const indexOfLastWorksheet = (currentPage * itemsPerPage) - 1;
    const indexOfFirstWorksheet = indexOfLastWorksheet - (itemsPerPage - 1);
    const currentWorksheets = activeWorksheets && activeWorksheets?.slice(indexOfFirstWorksheet, (indexOfLastWorksheet + 1))

    return (
        <>
            <TemplatesHeader>
                <TemplateCategory> {!filterBy ? 'all worksheets' : `${filterBy} worksheets`}</TemplateCategory>

                <TemplateCount>
                    {loading ? '' : error || activeWorksheets?.length < 1 ? 'No' : activeWorksheets?.length}
                    {loading ? 'Loading templates' : activeWorksheets?.length <= 1 ? ' worksheet' : ' worksheets' }
                </TemplateCount>
            </TemplatesHeader>

            {
                loading ? 
                    <TemplatesGrid>
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => <TemplateSkeleton key={n} />)} 
                    </TemplatesGrid>  : 
                error ? 
                    <ErrorNote>
                        <ExclamationCircleIcon style={styles.largeIcon} />
                        <p>{error}</p> 
                    </ErrorNote> :
          
                <TemplatesGrid>
                    {currentWorksheets && currentWorksheets?.map((worksheet, index) => <SingleWorksheet key={index} {...worksheet} />)} 
                </TemplatesGrid>    
            }

            {(!loading && activeWorksheets?.length === 0) && 
                <NoSearchMatchesFound>
                    <QuestionMarkCircleIcon style={styles.largeIcon} />
                    <p>No matches found for your search</p>
                </NoSearchMatchesFound>
            }
            
        </>
    )
}

export default Worksheets
