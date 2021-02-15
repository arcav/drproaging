import axios from "axios";
import Posts from "../components/Posts/Posts";

const URL = "http://localhost:1337";

const Blog = ({ posts }) => {
    console.log(posts);
    return <Posts Posts={posts} URL={URL} />;
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
