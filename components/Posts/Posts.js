import PostCard from "./PostCard";

const Posts = ({ Posts, URL }) => {
    return (
        <>
            {Posts.map((post) => (
                <PostCard
                    key={post.id}
                    Titulo={post.Titulo}
                    Post={post.Post}
                    Foto={post.Foto}
                    URL={URL}
                />
            ))}
        </>
    );
};

export default Posts;
