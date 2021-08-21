import { HeaderContainer, HeaderMain, HeaderSearch, HeaderDropDownContainer } from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchedWorksheets } from '../../redux/actionsCreators/worksheets'
import { styles } from '../../styles/styles'
import { SearchIcon } from '@heroicons/react/outline'
import DropDown2 from '../DropDown2'

const Header = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const { worksheets, loading, error } = useSelector(state => state.worksheets)

    const handleInput = (e) => {
        setInput(e.target.value)
        dispatch(searchedWorksheets(e.target.value.toLowerCase()))
    }

    //Dynamically pulling levels from available worksheets
    const levels = worksheets?.map(worksheet => worksheet.Level)
    const uniqueLevels = [...new Set (levels)]

     //Dynamically pulling subjects from available worksheets
     const subjects = worksheets?.map(worksheet => worksheet.Subjects)
     const uniqueSubjects = ["All", ...new Set (subjects)]

    //Dynamically pulling topics from available worksheets
    const topics = worksheets?.map(worksheet => worksheet.Topics)
    const uniqueTopics = ["All", ...new Set (topics)]

    return (
        <HeaderContainer>
            <h1>WORKSHEETS</h1>
            <HeaderMain>
                <HeaderSearch>
                    <input type="text" placeholder="Search Templates" onChange={handleInput} value={input} disabled={loading || error} />
                    <SearchIcon style={styles.smallIcon} />
                </HeaderSearch>
                
                <HeaderDropDownContainer>
                    <p>Filter by: </p>
                    <DropDown2 legend="levels" options={uniqueLevels} setInput={setInput} />
                    <DropDown2 legend="subjects" options={uniqueSubjects} setInput={setInput} />
                    <DropDown2 legend="topics" options={uniqueTopics} setInput={setInput} />
                </HeaderDropDownContainer>
            </HeaderMain>

        </HeaderContainer>
    )
}

export default Header