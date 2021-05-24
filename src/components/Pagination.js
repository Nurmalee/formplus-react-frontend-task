import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'

// import {chevronRightIcon} from '@heroicons/react/outline'

import styled from 'styled-components'
import {nextPage, previousPage, pageNumberClick} from '../redux/actionsCreators/pagination'
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

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }


    //CONDITIONALLY RENDER PAGINATION CONTANER
    if(loading || error) {
        return null
    }

    return (
        <PaginationContainer>
            <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false}> 
                prev
            </button>
            
            <ul>
                {pageDecrementBtn}

                {
                    pages.map(pageNumber => {
                        if ((pageNumber < maxPageNumberLimit + 1) && (pageNumber > minPageNumberLimit)) {
                        return (
                            <li
                                key={pageNumber}
                                id={pageNumber}
                                onClick={handlePageNumberClick}
                                className={currentPage === pageNumber ? "active" : null}
                            >
                                {pageNumber}
                            </li>
                        )} else {
                            return null
                        }
                    })
                }

                {pageIncrementBtn}

            </ul>

            <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                next
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        > li {
            border: 1px solid;
            padding: 3px 10px;
            cursor: pointer;
            margin-right: 3px;
            margin-top: 10px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

            > button {
                width: 100%;
                height: 100%;
            }
        }
    }

    > button {
        padding: 3px 10px;
        margin-left: 5px;
        margin-top: 10px;
        font-size: 13px;
        cursor: pointer;
        text-transform: capitalize;

        &:first-of-type {
            margin-right: 8px;
        }
    }

`
