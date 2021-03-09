import { Button } from "./Button";
import Link from "next/link";

const nameButton = [
    { id: 1, name: "Blog", path: "/Blog" },
    { id: 2, name: "Acerca de Mi", path: "/Acercade" },
    { id: 3, name: "Casos Clinicos", path: "/Casos" },
    { id: 5, name: "Asesorias de Piel", path: "/Asesorias" },
    { id: 4, name: "Contacto", path: "/Contacto" },
];

const Buttons = () => {
    return (
        <>
            {nameButton.map((x) => (
                <Link key={x.id} href={x.path}>
                    <Button className="waves-effect waves-light z-depth-2">
                        {x.name}
                    </Button>
                </Link>
            ))}
        </>
    );
};

export default Buttons;
