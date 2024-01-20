import styled from "styled-components"
import { Networks } from "../components/Networks"

const Container = styled.section`
    width: 100%;
    height: 220px;
    display: grid;

`

const Contact = () => {
    return(
        <Container>
            <Networks></Networks>
        </Container>
    )
}



export { Contact }