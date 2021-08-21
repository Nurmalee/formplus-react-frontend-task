import { PaginationContainer, ScreenPagination, BackToStart } from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, previousPage } from '../../redux/actionsCreators/pagination'
import { pageNumberClick } from '../../redux/actionsCreators/pagination'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import '../../styles/styles.css'
import { styles } from '../../styles/styles'

const Pagination2 = () => {

    const dispatch = useDispatch()

    const {activeWorksheets, loading, error} = useSelector(state => state.worksheets)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    const pageNumberLimit = 4;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(activeWorksheets?.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const handlePageNumberClick = (e) => {
        dispatch(pageNumberClick(Number(e.target.id)))
    };

    const handleNextbtn = () => {
        dispatch(nextPage())

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    
    const handlePrevbtn = () => {
        dispatch(previousPage())

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    //CONDITIONALLY RENDER PAGINATION CONTAINER
    if(loading || error || activeWorksheets?.length === 0) {
        return null
    }

    return (
        <>
        <PaginationContainer>

            <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false}>
                <ChevronLeftIcon style={{height: "18px", visibility: currentPage !== pages[0] ? 'visible' : 'hidden' }} />
                previous
            </button>

            <ScreenPagination>
                <li>{currentPage}</li>
                <li style={styles.unStyledPageListItem}>of</li>
                <li style={styles.unStyledPageListItem} id={pages.length} onClick={handlePageNumberClick}>{pages.length}</li>
            </ScreenPagination>

            <button onClick={handleNextbtn} disabled={currentPage === pages.length ? true : false}>
                next
                <ChevronRightIcon style={{height: "18px", visibility: currentPage !== pages.length ? 'visible' : 'hidden' }} />
            </button>
           
        </PaginationContainer>

        {currentPage >= 40 && <BackToStart onClick={handlePageNumberClick} id={1}>back to page one </BackToStart>}
        </>
    )
}

export default Pagination2