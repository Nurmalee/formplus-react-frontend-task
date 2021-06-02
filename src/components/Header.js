import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchedTemplates } from '../redux/actionsCreators/templates'
import { styles } from '../styles/styles'
import { SearchIcon } from '@heroicons/react/outline'
import DropDown from './DropDown'


const Header = ({theme, setCurrentTheme}) => {

    const [input, setInput] = useState('')

    const toggleTheme = () => {
        theme === 'light' ?  setCurrentTheme('dark') : setCurrentTheme('light')
    }

    const dispatch = useDispatch()

    const { templates, loading, error } = useSelector(state => state.templates)

    const handleInput = (e) => {
        setInput(e.target.value)
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
                    <input type="text" placeholder="Search Templates" onChange={handleInput} value={input} disabled={loading || error} />
                    <SearchIcon style={styles.smallIcon} onClick={toggleTheme} />
                </HeaderSearch>
                
                <HeaderDropDownContainer>
                    <p>sort by: </p>
                    <DropDown legend="categories" options={uniqueCategories} setInput={setInput} />
                    <DropDown legend="order" options={order} setInput={setInput} />
                    <DropDown legend="date" options={order} setInput={setInput} />
                </HeaderDropDownContainer>

            </HeaderMain>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    z-index: 100;

    @media screen and (min-width: 500px){
        position: sticky;
        top: 0;
        left: 0;
    }
`

const HeaderMain = styled.div`
    width: ${styles.containerWidth};
    margin: 0 auto;
    padding: 20px 0;
    padding-top: 40px;

    @media screen and (min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const HeaderSearch = styled.div`
    /* border: 1px solid #C4C4C4; */
    border: 1px solid ${props => props.theme.borderColor};
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
            /* box-shadow: 0 0 10px #FFF4EA; */
            border: 1px solid brown;
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
