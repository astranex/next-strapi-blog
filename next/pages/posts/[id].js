import axios from "axios";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import MarkdownIt from "markdown-it";

export default function Post({ post }) {
  const md = new MarkdownIt({
    html: true,
  });
  const htmlContent = md.render(post.attributes.content);

  // const router = useRouter();

  console.log(post);
  return (
    <Layout>
      Post {post.id} -{" "}
      <Link href="/posts">
        <a>Вернуться к постам</a>
      </Link>
      <h3>{post.attributes.title}</h3>
      <h4>{post.attributes.description}</h4>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const postsRes = await axios.get(
    `http://10.200.52.9:1337/api/posts/${ctx.query.id}`
  );

  return {
    props: {
      post: postsRes.data.data,
    },
  };
}
