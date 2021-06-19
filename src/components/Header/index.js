import { HeaderContainer, HeaderMain, HeaderSearch, HeaderDropDownContainer, ThemeToggler } from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchedTemplates } from '../../redux/actionsCreators/templates'
import { styles } from '../../styles/styles'
import { SearchIcon, FireIcon } from '@heroicons/react/outline'
import DropDown from '../DropDown'

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
                    <SearchIcon style={styles.smallIcon} />
                </HeaderSearch>
                
                <HeaderDropDownContainer>
                    <p>sort by: </p>
                    <DropDown legend="categories" options={uniqueCategories} />
                    <DropDown legend="order" options={order} />
                    <DropDown legend="date" options={order} />
                </HeaderDropDownContainer>

                <ThemeToggler onClick={toggleTheme}>
                    <p>Switch Mode</p>
                    <FireIcon style={styles.smallIcon} />
                </ThemeToggler>

            </HeaderMain>

        </HeaderContainer>
    )
}

export default Header