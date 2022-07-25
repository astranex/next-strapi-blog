import axios from "axios";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home({ posts }) {
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
    <Layout title={`Главная`}>
    </Layout>
  );
}