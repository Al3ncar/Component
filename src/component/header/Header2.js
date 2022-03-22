
import styled from "styled-components"

const Head = styled.div`
width:100%;
padding:18% 0%;
display:flex;
justify-content: space-between;
/* background-image:url("https://andrealealfotografia.com/wp-content/uploads/2018/09/Confete-001LN-150x230.jpg");
background-size:100% */`

const Box = styled.div`
width:50%;
height:0%;
background-color:white;
border: solid black 5vw;
`

const Header = () =>{
    return(
        <Head>
            <div>
                <h1>Carnaval</h1>
            </div>
            <Box>
                <h2>Mais sobre</h2>
                <p>
                    alflblajsbfjdksfahfsldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjfahdshjhjhjsadklj
                </p>
            </Box>
        </Head>
    )
}
export default Header 