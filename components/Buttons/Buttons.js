import { Button } from "./Button";
import Link from "next/link";
import styled from 'styled-components'


const ContainerButton= styled.div`
    display:flex;
    justify-content:space-around;

 


`


const nameButton = [
    { id: 1, name: "Blog", path: "/Blog" },
    { id: 2, name: "Sobre Mí", path: "/Conoceme" },
    { id: 3, name: "Casos Clinicos", path: "/Casos" },
    { id: 4, name: "Contacto", path: "/Contacto" },
];

const Buttons = () => {
    return (
        <ContainerButton>
            {nameButton.map((x) => (
                <Link href={x.path}>
                    <Button>{x.name}</Button>
                </Link>
            ))}
        </ContainerButton>
    );
};

export default Buttons;
