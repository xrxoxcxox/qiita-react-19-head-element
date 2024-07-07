import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header">
        <span className="title">React 19 head element test</span>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="horizontal-rule" />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
