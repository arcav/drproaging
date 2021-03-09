import styled from "styled-components";

const Photo = styled.img`
    width: 23%;
    border-radius: 25px;
    margin: 1.5rem;
  
    @media (max-width: 425px) {
        width: 90%;
      
    }
    @media (max-width: 768px) {
        width: 40%;
      
    }
`;
const Pargraph = styled.p`
    font-size: 17px;
    text-align: justify;
    justify-content: center;
    margin: 1rem 2rem 1rem 1rem;
    padding: 5px;
`;
const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 425px) {
        display: flex;
    flex-direction: column;
    align-items: center;
      
    };
    @media (max-width: 768px) {
        display: flex;
    flex-direction: column;
    align-items: center;
 
   
      
    }
`;

const Conoceme = () => {
    return (
        <AboutContainer>
            <Photo src="/Photo.jpg" className="card z-depth-4" />
            <Pargraph>
                Soy Médico Cirujano <b>(2015)</b> egresada de la{" "}
                <b>Universidad De Oriente</b> Venezuela, con reválida en Chile a
                través de <b>ASOFAMECH (2017).</b> Magister en Medicina Estética
                y Antienvejecimiento de la Universidad Complutense de Madrid,
                España (2019). Además de varios cursos y congresos.{" "}
                <b>(SOCHIMCE)</b> Experiencia profesional como médico por 6
                años, ejercicio profesional en{" "}
                <b>Hospitales, CESFAM, CESCOF, Dialisis, consulta privada</b> y
                en los últimos 2 años he sumado el estudio y trabajo en Medicina
                Estética. Para mi la Medicina Estética es una herramienta que
                bien aplicada y respetando la anatomía y fisiología humana puede
                mejorar la calidad de vida de los pacientes, prevenir los daños
                asociados al envejecimiento celular o simplemente satisfacer las
                necesidades de belleza y cuidado que no deben ser juzgadas como
                falta de amor propio. ¿Por qué Pro-aging? El título habla de
                medicina antienvejecimiento pero el envejecimiento es un proceso
                natural, intrínseco, universal e inevitable, por eso me gusta
                más ser PRO envejecimiento. Se trata de ser parte del proceso
                para que sea más armónico y agradable. Y una de las cosas que
                más me gusta es compartir mis conocimientos, explicar hasta el
                último detalle a mis pacientes, por eso en esta plataforma y en
                mis redes sociales encontrarás mucho material educativo que
                espero te resulte útil. Siempre dispuesta a ayudar,
                <br />
                <h5>Amanda Castro Castro</h5>
            </Pargraph>
        </AboutContainer>
    );
};

export default Conoceme;
