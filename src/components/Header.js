import { useDispatch, useSelector } from 'react-redux'
import { searchedTemplates } from '../redux/actionsCreators/templates'

import styled from 'styled-components'

import { SearchIcon } from '@heroicons/react/outline'
import DropDown from './DropDown'

const Header = () => {

    const dispatch = useDispatch()

    const { templates, loading, error, searchInput } = useSelector(state => state.templates)

    const handleInput = (e) => {
        dispatch(searchedTemplates(e.target.value.toLowerCase()))
    }

    //Dynamically pulling categories from available templates
    const categories = templates?.map(template => ['All', ...template.category]).join(',').split(',')
    const uniqueCategories = [...new Set (categories)]

    const order = ["default", "ascending", "descending"]

    return (
        <HeaderContainer>

            <HeaderMain>
                
                <HeaderSearch>
                    <input type="text" placeholder="Search Templates" onChange={handleInput} value={searchInput} disabled={loading || error} />
                    <SearchIcon style={{height: "20px", padding: "0 10px", color: "#C4C4C4"}} />
                </HeaderSearch>
                
                <HeaderDropDownContainer>
                    <p>sort by: </p>
                    <DropDown legend="categories" options={uniqueCategories} />
                    <DropDown legend="order" options={order} />
                    <DropDown legend="date" options={order} />
                </HeaderDropDownContainer>

            </HeaderMain>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    background-color: white;
    z-index: 100;

    @media screen and (min-width: 500px){
        position: sticky;
        top: 0;
        left: 0;
    }
`

const HeaderMain = styled.div`
    width: 90vw;
    margin: 0 auto;
    padding: 20px 10px;
    padding-top: 40px;

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

    > input {
        flex: 1;
        padding: 8px 5px;
        padding-left: 25px;
        font-size: 14px;
        border: 1px solid transparent;
        outline: none;
        width: 100%;

        &:focus {
            box-shadow: 0 0 10px #FFF4EA;
            border: 1px solid #FFF4EA;
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
