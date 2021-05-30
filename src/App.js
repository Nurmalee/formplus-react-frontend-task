import { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Header from './components/Header'
import Notification from './components/Notification'
import Templates from './components/Templates'
import Pagination from './components/Pagination'

const lightTheme = {
  backgroundColor: "rgb(254,254,254)",
  // textColor: "#545454",
  textColor: "#333",
  borderColor: "#CCC",
  boxShadow: "rgba(0, 0, 0, 0.08)",
}

const darkTheme = {
  backgroundColor: "#333",
  // textColor: "#C4C4C4",
  textColor: "rgb(213,213,213)",
  borderColor: "#555",
  boxShadow: "rgba(0, 0, 0, 0.72)",
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const App = () => {

  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[currentTheme]}>

      <Header theme={currentTheme} setCurrentTheme={setCurrentTheme}/>

      <Body>
        <Notification />
        <Templates />
        <Pagination />
      </Body>

    </ThemeProvider>
  )
}

export default App

const Body = styled.section`
  margin: 0 auto;
  padding: 10px;
  padding-bottom: 200px;
  background-color: ${props => props.theme.backgroundColor};
`
