import styled from "styled-components";

export const Button = styled.a`
    display: flex;
    margin: px;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: black;
    height: 30%;
    color: whitesmoke;
    border-style: solid;
    border-color: #ffe082;
    border-width: 2px;
    cursor: pointer;

    @media (min-width: 320px) {
        width: 70%;
        height: 2.5rem;
        padding: 2px;
        font-size: 16px;
        margin: 15px;
        :focus {
            background-color: whitesmoke;
        }
        :hover {
            background-color: whitesmoke;
            color: black;
            height:3.5rem;
            width:75%;
        }
        h6 {
            text-align: center;
        }
    }
    @media (min-width: 768px) {
        width: 60%;
        height: 4rem;
        padding: 4px;
        font-size: 18px;
        :focus {
            background-color: whitesmoke;
        }
        :hover {
            background-color: whitesmoke;
            color: black;
        }
        h6 {
            text-align: center;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } ;
`;
