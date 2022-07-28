import axios from "axios";
import Layout from "../../components/layout";
import PostPreview from "../../components/card";

export default function Posts({ posts }) {
  // some state
  // useEffect(() => {
  // fetch data
  // }, [])

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
  const postsRes = await axios.get(
    "http://10.200.52.9:1337/api/posts?populate=author&populate=categories&populate=image"
  );

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
