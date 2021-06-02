import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, previousPage } from '../redux/actionsCreators/pagination'
import { pageNumberClick } from '../redux/actionsCreators/pagination'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import '../styles/styles.css'
import { styles } from '../styles/styles'

const Pagination = () => {

    const dispatch = useDispatch()

    const {activeTemplates, loading, error} = useSelector(state => state.templates)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    const pageNumberLimit = 4;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(activeTemplates?.length / itemsPerPage); i++) {
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

    //BRIEF STYLING FOR UNSTYLED PAGE NUMBERS AND PAGE ITEMS
    const unStyledPageListItem = {
        border: "none",
        padding: "3px 5px"
    }

    //CONDITIONALLY RENDER PAGINATION CONTAINER
    if(loading || error || activeTemplates?.length === 0) {
        return null
    }

    return (
        <>
        <PaginationContainer>

            <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false}>
                <ChevronLeftIcon style={{height: "18px"}} /> 
                previous
            </button>

            <ScreenPagination>
                <li>{currentPage}</li>
                <li style={unStyledPageListItem}>of</li>
                <li style={unStyledPageListItem} id={pages.length} onClick={handlePageNumberClick}>{pages.length}</li>
            </ScreenPagination>

            <button onClick={handleNextbtn} disabled={currentPage === pages.length ? true : false}>
                next
                <ChevronRightIcon style={{height: "18px"}} />
            </button>
           
            
        </PaginationContainer>
        {currentPage >= 40 && <BackToStart onClick={handlePageNumberClick} id={1}>back to page one </BackToStart>}
        </>
    )
}

export default Pagination

const PaginationContainer = styled.div`
    width: ${styles.containerWidth};
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul {
        list-style: none;
        flex-wrap: wrap;

        > li {
            border: 1px solid ${props => props.theme.borderColor};
            border-radius: 3px;
            color: ${props => props.theme.textColor};
            padding: 3px 10px;
            cursor: pointer;
            margin-right: 3px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    > button {
        display: flex;
        padding: 12px;
        border: none;
        background-color: transparent;
        color: ${props => props.theme.textColor};
        font-size: 11px;
        cursor: pointer;
        text-transform: capitalize;

        &:disabled {
            color: #ddd;
        }

        @media screen and (min-width: 700px){
            font-size: 13px;
            padding: 12px 20px;
        }
    }
`

const ScreenPagination = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BackToStart = styled.div`
    cursor: pointer;
    font-size: 11px;
    margin-top: 40px;
    text-align: center;
    text-transform: capitalize;
    padding-left: 17px;
    color: ${props => props.theme.textColor};
`