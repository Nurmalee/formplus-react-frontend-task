import { DropDownFieldSet } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterTemplates, orderByName, orderByDate } from '../../redux/actionsCreators/templates'

const DropDown = ({legend, options}) => {

    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.templates)

    const handleSelect = (e) => {

        let selectedOption = e.target.value

        if(legend === 'categories'){
            dispatch(filterTemplates(selectedOption))
        }

        if(legend === 'order'){
            dispatch(orderByName(selectedOption))
        }

        if(legend === 'date'){
            dispatch(orderByDate(selectedOption))
        }
    }

    return (
        <DropDownFieldSet disabled={loading || error}>

            <legend>{legend}</legend>
            
            <select onChange={handleSelect}>
                {options?.map((link, index) => <option key={index} value={link}>{link}</option>)}
            </select>

        </DropDownFieldSet>
    )
}

export default DropDown
