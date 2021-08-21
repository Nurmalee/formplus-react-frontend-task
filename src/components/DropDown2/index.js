import { DropDownFieldSet } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterWorksheets } from '../../redux/actionsCreators/worksheets'

const DropDown2 = ({legend, options, setInput}) => {

    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.worksheets)

    const handleSelect = (e) => {
        let selectedOption = e.target.value
        dispatch(filterWorksheets(selectedOption))
        setInput('')
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

export default DropDown2