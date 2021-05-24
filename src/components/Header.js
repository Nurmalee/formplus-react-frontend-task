import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {searchTemplates} from '../redux/actionsCreators/templates'

import styled from 'styled-components'

import { SearchIcon } from '@heroicons/react/outline'
import DropDown from './DropDown'

const Header = () => {

    const dispatch = useDispatch()

    const {templates} = useSelector(state => state.templates)
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchTemplates(input))
    }

    // const categories = [...new Set(templates?.map(template => template.category))]
    // const categoriesUno = templates?.filter(template => template.category.includes("Health"))
    // const categoriesTwo = templates?.filter(template => template.category.includes("Education"))
    // const categoriesThree = templates?.filter(template => template.category.includes("E-commerce"))
    // const categoriesRearray = templates?.filter(template => template.category.filter(cat => cat.includes("Health")))
    // const uniquecategories = ["All", ...categories[0]]
    // console.log(categories[0], uniquecategories);
    // console.log(categoriesUno, categoriesTwo, categoriesThree,  categoriesRearray);

    const autoCategories = templates?.map(template => ["All", ...template.category].toString())
    //  console.log([...new Set(autoCategories)]);

    //OR LETS JUST DEFINE THE CATEGORIES MANUALLY SINCE THE IS ORDER OF TEMPLATES MAY CHANGE
    const categories = ["All", "Health", "E-commerce", "Education"]
    const order = ["default", "ascending", "descending"]

    return (
        <HeaderContainer>

            <HeaderSearch>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Templates" value={input} onChange={(e) => setInput(e.target.value)} />
                </form>
                <SearchIcon style={{height: "20px", padding: "0 10px", color: "#C4C4C4"}} />
            </HeaderSearch>

            <HeaderDropDownContainer>
                <p>sort by: </p>
                <DropDown legend="categories" options={categories} />
                <DropDown legend="order" options={order} />
                <DropDown legend="date" options={order} />
            </HeaderDropDownContainer>
            
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    @media screen and (min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const HeaderSearch = styled.div`
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (min-width: 850px) {
        margin-bottom: 0;
    }

    > form {
        flex: 1;
        display: flex;
        
        > input {
            flex: 1;
            padding: 8px 5px;
            padding-left: 25px;
            font-size: 14px;
            border: none;
            outline: none;
            width: 100%;
        }
    }
`

const HeaderDropDownContainer = styled.div`
    display: grid;
    gap: 10px;

    > p {
        font-size: 12px;
        text-transform: capitalize;
        align-self: center;
        color: #C4C4C4;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: 0.4fr 1fr 1fr 1fr;
    }

`
