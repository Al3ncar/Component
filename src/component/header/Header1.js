import styled from "styled-components"

const Nav = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content: space-around;
background-color: #72f872`

const Ul = styled.ul`
width:30%;
padding:1% 0;
display:flex;
justify-content:space-between;
list-style:none`

const Header = () => {
    return(
        <Nav>
            <h1>Carnaval</h1>
            <Ul>
                <li>Inicio</li>
                <li>Historia</li>
                <li>Arte</li>
                <li>Desfile</li>
                <li>Danças</li>
            </Ul>
        </Nav>
    )
}
export default Header 