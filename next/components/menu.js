import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <nav class="top-menu">
        <Link href="/">
          <a class="navbar-logo">
            <img src="/logo.png" />
            <span
              style={{
                fontWeight: 800,
                position: "relative",
                top: "-7px",
                left: "6px",
              }}
            >
              NEXT BLOG
            </span>
          </a>
        </Link>
        <ul class="menu-main">
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
