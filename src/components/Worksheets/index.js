import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorksheets } from '../../redux/actionsCreators/worksheets'
import Header from '../Header'
import Pagination from '../Pagination'
import { WorksheetsHeader, WorksheetsCategory, WorksheetsCount, ErrorNote, WorksheetsGrid, NoSearchMatchesFound } from './styles'
import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { styles } from '../../styles/styles'
import '../../styles/styles.css'
import SingleWorksheet from '../SingleWorksheet'
import WorksheetSkeleton from '../../skeletons/WorksheetSkeleton'

const Worksheets = () => {

    const dispatch = useDispatch()
    const {activeWorksheets, filterBy, loading, error} = useSelector(state => state.worksheets)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    useEffect(() => {
        //prevent refresh of worksheet page on return from worksheet details page or from any other page
        if (activeWorksheets !== undefined || activeWorksheets?.length > 0) {
            return
        } 
        //in any other case, just refresh/refetch the worksheet page
        else {
            dispatch(fetchWorksheets())
        }
    }, [dispatch, activeWorksheets])

    const indexOfLastWorksheet = (currentPage * itemsPerPage) - 1;
    const indexOfFirstWorksheet = indexOfLastWorksheet - (itemsPerPage - 1);
    const currentWorksheets = activeWorksheets && activeWorksheets?.slice(indexOfFirstWorksheet, (indexOfLastWorksheet + 1))

    return (
        <>
            <Header />

            <WorksheetsHeader>
                <WorksheetsCategory> {!filterBy ? 'all worksheets' : `${filterBy} worksheets`}</WorksheetsCategory>

                <WorksheetsCount>
                    {loading ? '' : error || activeWorksheets?.length < 1 ? 'No' : activeWorksheets?.length}
                    {loading ? 'Loading templates' : activeWorksheets?.length <= 1 ? ' worksheet' : ' worksheets' }
                </WorksheetsCount>
            </WorksheetsHeader>

            {
                loading ? 
                    <WorksheetsGrid>
                        {Array.from({ length: 20}).map((_, index) => <WorksheetSkeleton key={index} />)} 
                    </WorksheetsGrid>  : 
                error ? 
                    <ErrorNote>
                        <ExclamationCircleIcon style={styles.largeIcon} />
                        <p>{error}</p> 
                    </ErrorNote> :
        
                <WorksheetsGrid>
                    {currentWorksheets && currentWorksheets?.map((worksheet, index) => <SingleWorksheet key={index} worksheet={worksheet} />)} 
                </WorksheetsGrid>    
            }

            {(!loading && activeWorksheets?.length === 0) && 
                <NoSearchMatchesFound>
                    <QuestionMarkCircleIcon style={styles.largeIcon} />
                    <p>No matches found for your search</p>
                </NoSearchMatchesFound>
            }

            <Pagination />   
        </>
    )
}

export default Worksheets
