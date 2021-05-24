import styled from 'styled-components'
import Header from './components/Header'
import Notification from './components/Notification'
import Templates from './components/Templates'
import Pagination from './components/Pagination'

const App = () => {

  return (
    <>
      <Header />

      <Body>
        <Notification />
        <Templates />
        <Pagination />
      </Body>
      
    </>
  )
}

export default App

const Body = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 10px;
  padding-bottom: 200px;
`
