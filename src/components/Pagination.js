import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import {templateData} from '../templateData'
import {nextPage, previousPage, pageNumberClick} from '../redux/actionsCreators/pagination'
import '../dynamicStyle.css'

const Pagination = () => {

    const dispatch = useDispatch()

    const {templates} = useSelector(state => state.templates)
    const {currentPage, itemsPerPage} = useSelector(state => state.pagination)

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 15;

    const pageNumberLimit = 4;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(templates.length / itemsPerPage); i++) {
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

    console.log(currentPage);

    return (
        <PaginationContainer>
            <ul>
                <li>
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>

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

                <li>
                    <button
                    onClick={handleNextbtn}
                    disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >
                    Next
                    </button>
                </li>
            </ul>
            
        </PaginationContainer>
    )
}

export default Pagination

const PaginationContainer = styled.div`

    /* border: 1px solid; */
    margin-top: 100px;

    > ul {
        list-style: none;
        display: flex;
        justify-content: center;

        > li {
            border: 1px solid;
            padding: 5px 15px;
            cursor: pointer;
            margin-right: 2px;

            > button {
                width: 100%;
                height: 100%;
            }

        }
    }

`
