import { Button } from "./Button";
import Link from "next/link";

const nameButton = [
    { id: 1, name: "Blog", path: "/Blog" },
    { id: 2, name: "Sobre Mí", path: "/Conoceme" },
    { id: 3, name: "Casos Clinicos", path: "/Casos" },
    { id: 4, name: "Contacto", path: "/Contacto" },
];

const Buttons = () => {
    return (
        <>
            {nameButton.map((x) => (
                <Link  key={x.id} href={x.path}>
                    <Button>
                        {x.name}
                    </Button>
                </Link>
            ))}
        </>
    );
};

export default Buttons;
