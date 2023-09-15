import styled from "styled-components";

const Container = styled.section`
  width: 92%;
  height: 80px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  justify-self: end;
  margin: 32px;
  margin-bottom: 0px;


  
  @media (max-width: 768px){
    width: 90%;
    height: 60%;
    grid-column: 1 / 2;
    grid-row: 5 / 6;   
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-self: center;
    align-self: flex-end;        
    margin-right: 0px;     
  }
`;

const ItemBox = styled.div`
    width: 44px;
    height: 44px;
    display: grid;
    place-content: center;     
    transition: opacity 0.3s ease; /* Agrega una transición para la opacidad */ 

    &:hover {
        transform: scale(1.10); /* Efecto de crecer al pasar el mouse por encima */    

    }
`;

const Anchor  = styled.a`
  width: 38px;
  height: 38px;
  display: grid;
  place-content: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ItemsContainer = ({ arrayItems, columns, rows, containerMargin }) => {
    return(
        <Container style={{ 
            gridColumn: `${columns[0]} / ${columns[1]}`, 
            gridRow: `${rows[0]} / ${rows[1]}`,
            margin: `${containerMargin[0]}px ${containerMargin[1]}px ${containerMargin[2]}px ${containerMargin[3]}px` 
            }}
        >
            {arrayItems.map(link => (
                <ItemBox key={link.name}>
                    <Anchor 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={
                            {
                                backgroundImage: `url(${link.pathImage})`
                            }}
                    ></Anchor>
                </ItemBox>
            ))}
        </Container>
    );
}

export { ItemsContainer }