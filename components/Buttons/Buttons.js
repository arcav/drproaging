import { Button } from "./Button";

const nameButton = [
    { id: 1, name: "Blog", path: "/Blog" },
    { id: 2, name: "Acerca", path: "/Conoceme" },
    { id: 3, name: "Trabajos", path: "/Trabajos" },
    { id: 4, name: "Contacto", path: "/Contacto" },

];

const Buttons = () => {
    return (
        <div>
            {nameButton.map((x) => (
                <Button
                    key={x.id}
                    name={x.name} 
                    path={x.path} 
                    
                />
            ))}
        </div>
    );
};

export default Buttons;
