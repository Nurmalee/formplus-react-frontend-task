import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'

// import {chevronRightIcon} from '@heroicons/react/outline'

import styled from 'styled-components'
import {nextPage, previousPage, pageNumberClick} from '../redux/actionsCreators/pagination'
import '../dynamicStyle.css'

const Pagination = () => {

    const dispatch = useDispatch()

    const {activeTemplates} = useSelector(state => state.templates)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 15;

    const pageNumberLimit = 4;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(activeTemplates?.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const handlePageNumberClick = (e) => {
        // setCurrentPage(Number(e.target.id));
        dispatch(pageNumberClick(Number(e.target.id)))
    };

    const handleNextbtn = () => {
        // setCurrentPage(currentPage + 1);
        dispatch(nextPage())

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    
    const handlePrevbtn = () => {
        // setCurrentPage(currentPage - 1);
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

    return (
        <PaginationContainer>
            <ul>
                {/* <li> */}
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === pages[0] ? true : false}
                    >
                        prev page
                    </button>
                {/* </li> */}

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

                {/* <li> */}
                    <button
                    onClick={handleNextbtn}
                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                    >
                   next page
                    </button>
                {/* </li> */}
            </ul>
            
        </PaginationContainer>
    )
}

export default Pagination

const PaginationContainer = styled.div`
    margin-top: 100px;

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
    }

`
