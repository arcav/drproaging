import axios from "axios";
import styled from "styled-components";
import Posts from "../components/Posts/Posts";
import { Container } from "./index";

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:3rem;

  
    

    
`;

const URL = "http://localhost:1337";

const Blog = ({ posts }) => {
    console.log(posts);
    return (
        <BlogContainer>
            <Posts Posts={posts} URL={URL} />
        </BlogContainer>
    );
};

export const getStaticProps = async () => {
    const res = await axios("http://localhost:1337/Posts");
    const posts = await res.data;

    return {
        props: {
            posts,
        },
    };
};

export default Blog;
