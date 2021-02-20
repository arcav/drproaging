import axios from "axios";
import Posts from "../components/Posts/Posts";
import Image from "next/image";

const URL = "http://localhost:1337";

const Blog = ({ posts }) => {
    console.log(posts);
    return (
        <div
            className="valign-wrapper "
            style={{
                width: "100%",
                height: "100%",
                borderStyle: "double",
                borderWidth: "10px",
                borderColor: "#ffecb3",
            }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="container"
                        style={{ margin: "auto", marginTop: "20px" , textAlign:"center"}}
                    >
                       <h1>Blog</h1>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <Posts Posts={posts} URL={URL} />
                    </div>
                </div>
            </div>
        </div>
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
