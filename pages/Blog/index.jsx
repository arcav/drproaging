import React from "react";
import { client } from "../../utils/sanityClient";
import { urlFor } from "../../utils/imgBuilder";
import BlockContent from "@sanity/block-content-to-react";
import Container from "../../components/Container";

const serializers = {
  types: {
    code: (props) => (
      <BlockContent data-language={props.node.language}>
        {props.node.code}
      </BlockContent>
    ),
  },
};

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
        <Container key={i} className="m-10 border-2">
          <p>{post.title}</p>
          <img src={urlFor(post.mainImage)} width="50px" height="50px" />
          <BlockContent
            blocks={post.body}
            projectId={"gylmzmsj"}
            dataset={"production"}
            serializers={serializers}
          />
        </Container>
      ))}
    </>
  );
};

export default Blog;
