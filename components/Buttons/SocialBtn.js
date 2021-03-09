import styled from "styled-components";
import { SocialInstagram } from "@styled-icons/foundation/SocialInstagram";
import { Whatsapp } from "@styled-icons/remix-fill/Whatsapp";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import {Facebook2}  from "@styled-icons/icomoon/Facebook2"

const Ig = styled(SocialInstagram)`
    color: black;
    margin: 0.1rem;
    padding: 1rem;
    width: 5rem;
    :focus {
        color: black;
    }
    
        :hover {
            background-color: black;
            width: 5.5rem;
            color:  #FD1D1D;
        }
    
`;

const Fb = styled(Facebook2)`
    color: black;
    margin: 0.1rem;
    padding: 1rem;
    width: 4.2rem;
   

        :hover {
            background-color: black;
            width: 4.7rem;
            color:  blue;
       
    }
`;

const Linkdin = styled(Linkedin)`
    color: black;
    margin: 0.1rem;
    padding: 1rem;
    width: 4.2rem;
    :focus {
        color: black;
    }
    
        :hover {
            background-color: black;
            width: 4.8rem;
            color: blue;
      
    }
`;

const Whats = styled(Whatsapp)`
    color: black;
    margin: 0.1rem;
    padding: 1rem;
    width: 5rem;
    :focus {
        color: black;
    }
   
        :hover {
            background-color: black;
            width: 5.5rem;
            color: green;
        
            
        }
    
`;

const SocialGroup = styled.div`
    display: flex;

    @media (min-width: 320px) {
        width:90%;
        justify-content:center;
    }
`;



const SocialBtn = () => {
    return (
        <SocialGroup>
            <Ig className=" waves-effect waves-light white " />
            <Fb className=" waves-effect waves-light white "/>
            <Whats className=" waves-effect waves-light white  " />
            <Linkdin className=" waves-effect waves-light white   "/>
        </SocialGroup>
    );
};
export default SocialBtn;
