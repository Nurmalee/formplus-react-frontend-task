import { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
// import Header from './components/Header'
// import Notification from './components/Notification'
// import Templates from './components/AllTemplates'
// import Pagination from './components/Pagination'
import Header2 from './components/Header2'
import Worksheets from './components/Worksheets/Worksheets'
import Pagination2 from './components/Pagination2'

const lightTheme = {
  backgroundColor: "rgb(254, 254, 254)",
  textColor: "#555",
  borderColor: "#DDD",
  boxShadow: "rgba(0, 0, 0, 0.08)",
  skeletonTextBg: "rgb(250, 250, 250)",
  skeletonShinnerBg: "rgba(254, 254, 254, 0.6)"
}

const darkTheme = {
  backgroundColor: "#333",
  textColor: "rgb(213, 213, 213)",
  borderColor: "#555",
  boxShadow: "rgba(0, 0, 0, 0.72)",
  skeletonTextBg: "rgb(100, 100, 100)",
  skeletonShinnerBg: "rgba(110, 110, 110, 0.3)"
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const App = () => {

  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[currentTheme]}>

      {/* <Header theme={currentTheme} setCurrentTheme={setCurrentTheme}/> */}
      <Header2 />
      <Body>
        {/* <Notification /> */}
        {/* <Templates /> */}
        <Worksheets />
        {/* <Pagination /> */}
        <Pagination2 />
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
