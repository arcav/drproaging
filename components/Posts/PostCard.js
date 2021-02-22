import styled from "styled-components";
import LogoButton from "../Buttons/Button";
import Link from "next/link";

const Card = styled.div`
    display: flex;
    flex-direction:column;
    width:20%;
    box-sizing:content-box;
    text-align:center;

   

   
 
   
`;

const PostCard = ({ Titulo, Foto, URL }) => (
    
    <Card className="card">
        <img src={`${URL}${Foto[0].url}`} />

        <p>{Titulo}</p>

        <Link href="/Post">Post</Link>
    </Card>
);

export default PostCard;
