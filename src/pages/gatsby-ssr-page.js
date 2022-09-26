import React from "react";
import { Link } from "gatsby";

const SSRpage = ({ serverData }) => {
  return (
    <div>
      <h3>{serverData.title.rendered}</h3>
      <Link to="/posts">see posts</Link> <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default SSRpage;

export async function getServerData() {
  try {
    const res = await fetch(
      `https://dev-ss-wp-be.pantheonsite.io/wp-json/wp/v2/posts/1`
    );
    return {
      props: await res.json(),
      status: 200,
      headers: {
        "max-age": "0",
      },
    };
  } catch (err) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
