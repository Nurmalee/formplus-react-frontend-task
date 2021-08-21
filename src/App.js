import Worksheets from './components/Worksheets'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WorksheetDetails from './components/WorksheetDetails'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/worksheets/worksheet_details/:id" exact component={WorksheetDetails}/>
        <Route path="/worksheets" exact component={Worksheets} />
      </Switch>
    </Router>
  )
}

export default App
