
import Header1 from "./Header1"
import Header2 from "./Header2"

import styled from "styled-components"

const Headerprin = styled.div`
width:100%;
`
const Headers = () => {
    return(
        <Headerprin>
            <Header1/>
            <Header2/>
        </Headerprin>
    )
}

export default Headers
