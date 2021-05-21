import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTemplates} from './redux/actionsCreators/templates'
import styled from 'styled-components'
import Header from './components/Header'
import Notification from './components/Notification'
import Templates from './components/Templates'

const App = () => {
  const dispatch = useDispatch()
  const {templates, loading, error} = useSelector(state => state.templates)

  useEffect(() => {
      dispatch(fetchTemplates())
  }, [dispatch])

  return (
    <AppContainer>
      <Header templates={templates} />
      <Notification />
      <Templates loading={loading} templates={templates} error={error} />
      
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 50px 10px;
`
