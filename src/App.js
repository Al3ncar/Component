import React from "react" 
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

import Header from "./component/header/Headers"
import Main from "./component/Main"
import Footer from "./component/Footer"

const GlobalStyle = createGlobalStyle`

*{
  padding:0%;
  margin:0%;
  box-sizing:border-box;
}`
const Section = styled.div`
width:100%;
background-color:;`

const App = () => {
  return(
    <Section>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </Section>
  )
}

export default App