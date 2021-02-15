import styled from "styled-components";
import Link from "next/link";

const LogoButton = styled.button`
    margin: 50px 10px 30px 10px;
    border-radius: 5px;
    background-color: black;
    height: 3rem;
    width: 9.2rem;
    color: whitesmoke;
    border-style: solid;
    border-color: #ffe082;
    border-width: 2px;
    font-weight: 400;
    text-align:center;
    font-size:1.4rem;

    :hover {
        background-color:#eeeeee ;
        border-style: solid;
        border-width: 2px;
        border-color: #ffe082;
        color: black;
       
    }
    h6 {
        text-align: center;
        
    }
   
`;

export const Button = ({ name, path }) => {
    return (
        <Link href={path}>
            <LogoButton className="waves-effect hoverable z-depth-2 ">
                {name}
            </LogoButton>
        </Link>
    );
};
