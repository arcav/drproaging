import Image from "next/image";
import Buttons from "../Buttons/Buttons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    margin:auto;
`;

const Principal = () => {
    return (
        <Container>
            <Image src="/Logo.svg" width="1000" height="300" />

            <Buttons />
        </Container>
    );
};

export default Principal;
