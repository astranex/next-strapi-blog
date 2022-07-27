import Link from "next/link";

export default function PostPreview({ item }) {
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

  const { data: image } = item.attributes.image;

  return (
    <Link href={`/posts/${item.id}`}>
      <a>
        {/* <h3>{item.attributes.title}</h3>
              <h4>{item.attributes.description}</h4>
              <p>{item.attributes.content}</p> */}
        <div className="card">
          <div className="card-header">
            {image && (
              <img
                // src="https://phonoteka.org/uploads/posts/2021-03/1616700492_50-p-fon-abstraktsiya-vektor-52.jpg"
                src={`http://10.200.52.9:1337${image?.attributes.url}`}
                alt="rover"
              />
            )}
          </div>
          <div className="card-body">
            {item.attributes.category && (
              <span className={`tag ${setTag(item)}`}>
                {item.attributes.category}
              </span>
            )}
            <h4>{item.attributes.title}</h4>
            <p>{item.attributes.description}</p>
            <div className="date">
              <div className="date-info">
                <small>
                  {new Date(item.attributes.publishedAt).toLocaleDateString(
                    "ru"
                  )}
                  ,{" "}
                  {`${new Date(item.attributes.publishedAt).getHours()}`
                    .length === 1
                    ? "0" + new Date(item.attributes.publishedAt).getHours()
                    : new Date(item.attributes.publishedAt).getHours()}
                  :
                  {`${new Date(item.attributes.publishedAt).getMinutes()}`
                    .length === 1
                    ? "0" + new Date(item.attributes.publishedAt).getMinutes()
                    : new Date(item.attributes.publishedAt).getMinutes()}
                </small>
              </div>
              {item.attributes.author && (
                <div className="author">
                  <p className="author-name">{item.attributes.author}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
