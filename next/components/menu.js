import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <nav className="top-menu">
        <Link href="/">
          <a className="navbar-logo">
            <img src="/logo.png" />
            <span
              style={{
                fontWeight: 800,
                position: "relative",
                top: "-6px",
                left: "6px",
              }}
            >
              NEXT BLOG
            </span>
          </a>
        </Link>
        <ul className="menu-main">
          <li>
            <Link href="/">
              <a>ГЛАВНАЯ</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>О НАС</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>ПОСТЫ</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>КОНТАКТЫ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
