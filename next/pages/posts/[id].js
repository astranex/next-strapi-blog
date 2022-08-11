import axios from "axios";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import MarkdownIt from "markdown-it";

export const setTag = (category) => {
  switch (category.attributes.name) {
    case "Маркетинг":
      return "tag-yellow";
      break;
    case "Дизайн":
      return "tag-green";
      break;
    case "Программирование":
      return "tag-orange";
      break;
    case "Музыка":
      return "tag-red";
      break;
    default:
      break;
  }
};

export default function Post({ post }) {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlContent = md.render(post.attributes.content);
  const { data: image } = post.attributes?.image;
  const { data: categories } = post.attributes?.categories;
  const { data: author } = post.attributes?.author;

  return (
    <Layout>
      <div className="post">
        <div className="post-navigation">
          <h2>
            {post.id}. {post.attributes.title}
            <div className="post-navigation--categories">
              {categories.length !== 0 &&
                categories.map((category) => {
                  return (
                    <span className={`tag ${setTag(category)}`}>
                      {category?.attributes?.name}
                    </span>
                  );
                })}
            </div>
          </h2>

          <div className="post-button">
            <Link href="/posts">
              <a>Вернуться к постам</a>
            </Link>
          </div>
        </div>

        <div className="post-image">
          {image && (
            <img src={`http://10.200.52.9:1337${image.attributes.url}`} />
          )}
        </div>
        <div className="post-title">
          <h3>{post.attributes.title}</h3>
        </div>
        <div className="post-description">
          <h4>{post.attributes.description}</h4>
        </div>
        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></section>
        {author && (
          <div className="post-author">
            <p>Автор: {author.attributes.username}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // const postRes = await axios.get(
  //   `http://10.200.52.9:1337/api/posts/${ctx.query.id}?populate=author&populate=categories&populate=image`
  // );

  const postRes = await axios.post(
    "http://10.200.52.9:1337/graphql",
    {
      query: `
        query getPost {
        post (id: ${ctx.query.id}) {
          data {
            id
            attributes {
              publishedAt
              title
              description
              content
              categories {
                data {
                  attributes {
                    name
                  }
                }
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              author {
                data {
                  attributes {
                    username
                    avatar {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
      variables: {},
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return {
    props: {
      post: postRes.data.data.post.data,
    },
  };
}
