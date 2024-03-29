import styled from "styled-components";
import { SocialInstagram } from "@styled-icons/foundation/SocialInstagram";
import { Whatsapp } from "@styled-icons/remix-fill/Whatsapp";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Facebook2 } from "@styled-icons/icomoon/Facebook2";

const Ig = styled(SocialInstagram)`
    color: black;
    margin: 0.1rem;
    padding: 5px;
    width: 3.3rem;

    :hover {
        width: 3.5rem;
        color: #fd1d1d;
    }
`;

const Fb = styled(Facebook2)`
    color: black;
    margin: 0.1rem;
    padding: 5px;
    width: 2.7rem;

    :hover {
        width: 3rem;
        color: blue;
    }
`;

const Linkdin = styled(Linkedin)`
    color: black;
    margin: 0.1rem;
    padding: 5px;
    width: 2.7rem;

    :hover {
        width: 3rem;
        color: blue;
    }
`;

const Whats = styled(Whatsapp)`
    color: black;
    margin: 0.1rem;
    padding: 5px;
    width: 3.3rem;

    :hover {
        width: 3.8rem;
        color: green;
    }
`;

const SocialGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (min-width: 320px) {
        width: 80%;
    }
`;

const SocialBtn = () => {
    return (
        <SocialGroup>
            <Ig size="48" className=" waves-effect waves-light white" />
            <Fb  size="48"className=" waves-effect waves-light white" />
            <Whats  size="48" className=" waves-effect waves-light white" />
            <Linkdin  size="48"className=" waves-effect waves-light white" />
        </SocialGroup>
    );
};
export default SocialBtn;
