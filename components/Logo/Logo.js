import styled from "styled-components";

const StyledLogo = styled.img`
    width: 50%;
    margin-top: 2rem;
    padding: 0.9rem;
    @media (max-width: 425px) {
        width: 80%;
    margin-top: 2rem;
    padding: 0.9rem;
        
    }
`;

const Logo = () => {
    return (
        <>
            <StyledLogo src="./Logo.svg" />
        </>
    );
};

export default Logo;
