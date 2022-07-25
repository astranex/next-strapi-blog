import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Posts({ posts }) {
  const setTag = (item) => {
    switch (item.attributes.category) {
      case "Маркетинг": // if (x === 'value1')
        return "tag-yellow";
        break;
      case "Дизайн": // if (x === 'value2')
        return "tag-green";
        break;
      case "Программирование":
        return "tag-orange";
        break;
      default:
        break;
    }
  };

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
          return (
            <Link href={`/posts/${item.id}`}>
              <a>
                {/* <h3>{item.attributes.title}</h3>
              <h4>{item.attributes.description}</h4>
              <p>{item.attributes.content}</p> */}
                <div class="card">
                  <div class="card-header">
                    <img
                      src="https://phonoteka.org/uploads/posts/2021-03/1616700492_50-p-fon-abstraktsiya-vektor-52.jpg"
                      alt="rover"
                    />
                  </div>
                  <div class="card-body">
                    {item.attributes.category && (
                      <span className={`tag ${setTag(item)}`}>
                        {item.attributes.category}
                      </span>
                    )}
                    <h4>{item.attributes.title}</h4>
                    <p>{item.attributes.description}</p>
                    <div class="date">
                      <div class="date-info">
                        <small>
                          {new Date(
                            item.attributes.publishedAt
                          ).toLocaleDateString("ru")}
                          ,{" "}
                          {`${new Date(item.attributes.publishedAt).getHours()}`
                            .length === 1
                            ? "0" +
                              new Date(item.attributes.publishedAt).getHours()
                            : new Date(item.attributes.publishedAt).getHours()}
                          :
                          {`${new Date(
                            item.attributes.publishedAt
                          ).getMinutes()}`.length === 1
                            ? "0" +
                              new Date(item.attributes.publishedAt).getMinutes()
                            : new Date(
                                item.attributes.publishedAt
                              ).getMinutes()}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const postsRes = await axios.get("http://10.200.52.9:1337/api/posts");

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
