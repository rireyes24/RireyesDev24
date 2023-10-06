import styled from "styled-components";
import rireyesLogo from "../../../public/logoRireyes.svg"
import { LeftPanel, Logo, LogoText } from "../NavigatorBar";

const MyFooter = styled.footer`
    width: 100%;
    height: 82px;
    background-color: #1d2026;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid gray;
    margin-top: 60px;
`;


const Footer = () => {
    return(
        <MyFooter>          
            <LeftPanel>                
                <Logo></Logo>
                <LogoText>RIREYES</LogoText>        
            </LeftPanel>
        </MyFooter>
    );
}

export { Footer }