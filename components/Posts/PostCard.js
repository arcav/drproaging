import styled from "styled-components";
import  LogoButton  from "../Buttons/Button";
import Link from "next/link";
const Card = styled.div`
    margin-top: 20px;

    img {
        width: 10rem;
        height: 15rem;
    }
`;

const PostCard = ({ Titulo, Foto, URL }) => (
    <Card>
        <div className="col s12 m6 xl4">
            <div className="card hoverable  z-depth-2">
                <div className="card-image">
                    <img
                        className="responsive-img"
                        src={`${URL}${Foto[0].url}`}
                    />
                    <span className="card-title"></span>
                </div>
                <div className="card-content">
                    <p>{Titulo}</p>
                </div>
                <div className="card-action">
                    <Link href="/Post">
                    Post
                    </Link>
                </div>
            </div>
        </div>
    </Card>
);

export default PostCard;
