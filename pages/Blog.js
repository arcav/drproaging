import PostCard from "../components/Posts/PostCard";
import { fetchQuery, baseUrl } from "../utils/fetchQuery";
import post from "../Data/datos";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";

const PostContainer = styled.div`
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 6fr 6fr 6fr;
    align-items: center;

    @media (max-width: 425px) {
        width: 90%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 6fr;
    }
    @media (min-width: 426px) {
        width: 90%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 4fr 4fr;
    }
    @media (min-width: 1024px) {
        width: 80%;
        display: grid;

        grid-template-columns: 2fr 2fr 2fr;
    }
`;

const Blog = ({ post }) => {
    return (
        <>
            <PostContainer>
                {post.map((post) => (
                    <PostCard
                        key={post.id}
                        Titulo={post.Titulo}
                        Post={post.Post}
                        Foto={post.Foto}
                        baseUrl={baseUrl}
                    />
                ))}
            </PostContainer>
        </>
    );
};

export async function getStaticProps() {
    const res = `${post}`;
    /* const res = await fetchQuery(`${datos}`);
    const posts = await res.data */
    console.log(post);
    return {
        props: {
            post,
        },
    };
}

export default Blog;
