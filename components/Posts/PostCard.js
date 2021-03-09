import styled from "styled-components";



const CardWrapper = styled.div`
    justify-content: center;
    margin: 10px;
    border-radius:10px;
    cursor: pointer;

    h3 {
        font-size: 28px;
    }
`;

const PostCard = ({ Titulo, Post, Foto, baseUrl }) => {
    return (
     
            <CardWrapper className="card z-depth-2">
                <h3>{Titulo}</h3>
                <img
                    className="responsive-img"
                    src={`${Foto}`}
                    /*  src={`${baseUrl}${Foto[0].url}`} */
                />
                <p>{Post}</p>
            </CardWrapper>
       
    );
};

export default PostCard;
