import { createClient } from "next-sanity";
import Image from "next/image";
import React from "react";

const client = createClient({
  projectId: "gylmzmsj",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  ignoreBrowserTokenWarning: true,

});
export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: { posts },
  };
}
const Blog = ({ posts }) => {
  console.log(posts)
  return (
    <>
      {posts.map((x, index) => (
        <div key={index}>
          <p>{x.title}</p>
        </div>
      ))}
    </>
  );
};

export default Blog;
