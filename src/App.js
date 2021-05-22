import styled from 'styled-components'
import Header from './components/Header'
import Notification from './components/Notification'
import Templates from './components/Templates'
import Pagination from './components/Pagination'

const App = () => {

  return (
    <AppContainer>

      <Header />
      <Notification />
      <Templates />
      <Pagination />
      
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 50px 10px;
`
