import React from "react";
import { graphql, Link } from "gatsby";

const One = (props) => {
  return (
    <div>
      <h1>{props.data.wpPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.wpPost.content }}
      ></div>
      <Link to="/posts">all posts</Link> <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default One;

export const singlePost = graphql`
  query postQuery($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      id
    }
  }
`;
