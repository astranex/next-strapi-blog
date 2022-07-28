import Link from "next/link";

export default function PostPreview({ item }) {
  const { data: image } = item?.attributes?.image;
  const { data: categories } = item?.attributes?.categories;
  const { data: author } = item?.attributes?.author;

  const setTag = (category) => {
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

  return (
    <Link href={`/posts/${item.id}`}>
      <a>
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
            <div className="tags">
              {categories.length !== 0 &&
                categories.map((category) => {
                  return (
                    <span className={`tag ${setTag(category)}`}>
                      {category?.attributes?.name}
                    </span>
                  );
                })}
            </div>

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
              {author?.attributes.username && (
                <div className="author">
                  <p className="author-name">{author.attributes.username}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
