import React from "react";
import { graphql, Link } from "gatsby";

const Index = (props) => {
  const posts = props.data.allWpPost.nodes;
  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.slug}>
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
      ))}
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Index;

export const posts = graphql`
  query MyQuery {
    allWpPost {
      nodes {
        id
        title
        slug
      }
    }
  }
`;
