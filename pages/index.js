import Logo from "../components/Logo/Logo";
import Buttons from "../components/Buttons/Buttons";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 95%;
    } ;
`;
const ContainerButton = styled(Container)`
    justify-content: center;
    height: 33%;
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
