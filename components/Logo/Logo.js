import Image from "next/image";
import Buttons from "../Buttons/Buttons";
import styled from "styled-components";

const StyledLogo = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20%;
    width: 95%;
    margin-top:4rem;
`;

const Logo = () => {
    return (
        <>
            <StyledLogo src="./Logo.svg" />
        </>
    );
};

export default Logo;
