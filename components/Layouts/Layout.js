import styled from "styled-components";

export const Layout = styled.div`
    width :100%;
    max-height:max-content;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items:center;
    border-style: double;
    border-width: 10px;
    border-color: #ffecb3;
`;
export const CardLayout = styled.div`
  
    width: 70%;
    height: 70%;
    border-style: double;
    border-width: 15px;
    border-color: #ffecb3;
    @media (min-width:319px) {
        width:90%;
    }
`;
