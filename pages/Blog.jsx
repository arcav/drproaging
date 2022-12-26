import React from "react";
import { client } from "../utils/sanityClient";
import {urlFor} from "../utils/imgBuilder"


export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);
  console.log(urlFor(posts));
  return {
    props: { posts },
  };
}
const Blog = ({ posts }) => {
  return (
    <>
      {posts.map((post, i) => (
        <>
          <p>{post.title}</p>
          <img src={urlFor(post.mainImage)} />
        </>
      ))}
    </>
  );
};

export default Blog;
