import styled from "styled-components";
import Rireyes_Light from '/Rireyes_Light.svg';
import Background from '/background-header.jpg';

const MyFooter = styled.footer`
    width: 68%;
    height: 160px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
`;


const Logo = styled.span`
    background-image: url(${Rireyes_Light});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 200px;
    height: 50px;
    margin-bottom: 20px;    
`;

const CurrentYear = styled.h3`
  font-weight: bold;
`;


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <MyFooter>             
            <Logo></Logo>
            <CurrentYear>© {currentYear} Rireyes Technologies</CurrentYear> 
        </MyFooter>
    );
}

export { Footer }