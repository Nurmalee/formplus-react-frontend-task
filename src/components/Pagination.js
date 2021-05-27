import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline'

import styled from 'styled-components'
import {nextPage, previousPage } from '../redux/actionsCreators/pagination'
import {pageNumberClick} from '../redux/actionsCreators/pagination'
import '../dynamicStyle.css'

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

    //CONDITIONALLY RENDER PAGINATION CONTANER
    if(loading || error) {
        return null
    }

    return (
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
    )
}

export default Pagination

const PaginationContainer = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul {
        list-style: none;
        flex-wrap: wrap;

        > li {
            border: 1px solid #C4C4C4;
            border-radius: 3px;
            padding: 3px 10px;
            cursor: pointer;
            margin-right: 3px;
            margin-top: 10px;
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
        font-size: 11px;
        cursor: pointer;
        text-transform: capitalize;

        @media screen and (min-width: 700px){
            font-size: 13px;
            padding: 12px 20px;
        }

        &:first-of-type {
            margin-right: 8px;
        }
    }

`

const ScreenPagination = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`