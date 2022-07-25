import Menu from "./menu";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, title }) => {
  return (
    <div className="content">
      <Menu />
      {title && <Header title={title} />}
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
