import Layout from "../../components/layout.js";

export default function Contact() {
  return (
    <Layout title={"Контакты"}>
      <div className="page-content">
        <h3>Здесь есть наши контакты</h3>
        <ul style={{ marginBottom: "15px" }}>
          <li>
            <a href="https://mcs.ooo/" target="_blank">
              МКС
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
