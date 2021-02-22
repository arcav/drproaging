import Logo from "../components/Logo/Logo";
import Buttons from "../components/Buttons/Buttons";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: center;
    align-content: space-around;
   

    @media (max-width: 375px) {
       
        flex-direction: column;
        align-items: center;       
        justify-content: center;
        width: 95%;
        height: 100vh;
        margin:auto;   
    } ;
`;
const ContainerButton = styled(Container)`
    justify-content: center;
    height: 20%;
  
`;

const index = () => {
    return (
        <>
            <Container className="card z-depth-3">
                <Logo />
                <ContainerButton>
                    <Buttons />
                </ContainerButton>
            </Container>
        </>
    );
};

export default index;
