import styled from "styled-components";

const CardWrapper = styled.div`
    justify-content: center;
    margin: 30px;
    border-radius: 10px;
    background-color:white;
    border:solid black 3px;
    cursor: pointer;

    h3 {
        font-size: 28px;
        margin:10px; 
        text-align: center;
    }
    img {
        margin: -25px 0px 0px 35px;
        border-radius: 10px 10px 10px 10px;
         border:solid #fff8e1 2.8px; 
        height:90%;
        width:90%;  
    }

    p{
        margin:15px;
    }
`;

const PostCard = ({ Titulo, Post, Foto, baseUrl }) => {
    return (
        <>
            <CardWrapper className="card z-depth-3">
                <img
                    className="responsive-img z-depth-3"
                    src={`${Foto}`}
                    /*  src={`${baseUrl}${Foto[0].url}`} */
                />
                <h3>{Titulo}</h3>
                <p>{Post}</p>
            </CardWrapper>
        </>
    );
};

export default PostCard;
