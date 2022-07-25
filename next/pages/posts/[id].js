import Link from "next/link";
import Layout from "../../components/Layout";

export default function Post() {
  return (
    <Layout>
      Post - <Link href='/posts'><a>Вернуться к постам</a></Link>
    </Layout>
  );
}
