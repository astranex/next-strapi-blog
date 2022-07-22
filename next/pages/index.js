import axios from "axios";

export default function Home({ posts }) {
  // some state
  // useEffect(() => {
  // fetch data
  // }, [])
  return (
    <>
      {posts.data.map((item) => {
        return (
          <>
            <h3>{item.attributes.title}</h3>
            <h4>{item.attributes.description}</h4>
            <p>{item.attributes.content}</p>
          </>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
