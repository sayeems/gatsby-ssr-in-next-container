import React from "react";
import { Link } from "gatsby";

const Index = () => {
  return (
    <div>
      <h3>Name: BD-decoupled</h3>
      <Link to="/posts">see posts</Link> <br />
      <Link to="/gatsby-ssr-page">SSR page</Link>
    </div>
  );
};

export default Index;
