import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { SearchIcon } from '@heroicons/react/outline'
import DropDown from './DropDown'

const Header = () => {

    const {templates} = useSelector(state => state.templates)

    // const dropdownLimks = [...new Set(templates.map(template => template.category))]
    // const uniqueLinks = dropdownLimks.map(links => links)
    // console.log(dropdownLimks);

    return (
        <HeaderContainer>

            <HeaderSearch>
                <form>
                    <input type="text" placeholder="Search Templates"/>
                </form>
                <SearchIcon style={{height: "20px", padding: "0 10px", color: "#C4C4C4"}} />
            </HeaderSearch>

            <HeaderDropDownContainer>
                <p>sort by: </p>
                <DropDown />
                <DropDown />
                <DropDown />
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
            padding: 7px 5px;
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
