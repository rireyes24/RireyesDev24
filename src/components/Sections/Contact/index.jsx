import styled from "styled-components"
import { Networks } from "../../Networks"

const Container = styled.section`
    width: 100%;
    height: 220px;
    display: grid;
`

const P = styled.p`
    font-size: 18px;
    margin-bottom: 44px;
`

const Contact = () => {
    return(
        <Container>
            <P>Puedes contactarme en cualquiera de mis redes sociales.</P>
            <Networks></Networks>
        </Container>
    )
}



export { Contact }