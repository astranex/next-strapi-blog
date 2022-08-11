import axios from "axios";
import Layout from "../../components/layout";
import PostPreview from "../../components/card";

export default function Posts({ posts }) {
  return (
    <Layout title={`Посты`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {posts.data.map((item) => {
          return <PostPreview item={item} />;
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const postsRes = await axios.get(
  //   "http://10.200.52.9:1337/api/posts?populate=author&populate=categories&populate=image"
  // );

  // https://stackoverflow.com/questions/70752976/graphql-retrieves-only-maximum-10-items-from-strapi

  const postsRes = await axios.post(
    "http://10.200.52.9:1337/graphql",
    {
      query: `
        query getPosts {
        posts(pagination: { limit: 100 }) {
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
      posts: postsRes.data.data.posts,
    },
  };
}
