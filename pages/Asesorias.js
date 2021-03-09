import styled from "styled-components";

const Parargraph = styled.p`
    margin: 2rem;
    padding: 1rem;
    font-size: 20px;
`;

const Asesorias = () => {
    return (
        <div>
            <Parargraph>
                <div className="card">
                    • Como médico te puedo ayudar a armar una rutina orientada a
                    tu tipo de piel y necesidades para que no gastes dinero en
                    productos de moda e innecesarios que quizás no van contigo.
                    <br />
                </div>
                <div className="card">
                    • Revisaremos lo que tienes en tu stock y que podemos usar,
                    siempre pensando en economizar porque sé que el cuidado de
                    la piel es costoso.
                </div>
                <br />
                <div className="card">
                    • Si necesitas alguna receta médica la recibirás.
                </div>
                <br />
                <div className="card">
                    • Patologías que NO trato por que ameritan otros estudios y
                    aparatología (como láser por ejemplo): acnè moderado o
                    severo, rosácea moderada o severa, lesiones malignas o
                    premalignas y otras que te notificaré previamente porque
                    igual puedo hacer diagnóstico clínico y orientarte en el
                    camino que necesitas para resolver tu condición.
                    <br />
                </div>
                <div className="card">
                <b>POLÍTICAS DE TOMA DE HORAS Y ATENCIÓN:</b>
                <br />
                *Valor de la consulta en Chile: 18.000 CLP
                <br />
                *Valor internacional: 25 USD (paypal)
                <br />
                1. De no asistir a la hora programada sin avisar previamente, se
                tomará como realizada sin devoluciones.
                <br />
                2. La consulta dura 30 minutos, si llegas al minuto 15 de tu
                hora no podremos dar una consulta de calidad porque el tiempo no
                será suficiente y hay otros pacientes (sin devoluciones de
                dinero)
                <br />
                3. Las horas se abren al inicio de cada mes.
                <br />
                4. La asesoría se hace vía online (videollamada por zoom) +
                fotografias clinicas solicitadas.
                <br />
                5. La asesoría incluye un control fotografico al mes para
                verificar evolución y hacer ajustes de ser necesarios. (Este
                control no tiene costo adicional) 6. Próximas consultas
                posteriores al primer control tienen el mismo valor de la
                consulta inicial.
                </div>
            </Parargraph>
        </div>
    );
};

export default Asesorias;
