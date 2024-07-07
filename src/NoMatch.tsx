import { Link } from "react-router-dom";

export function NoMatch() {
  const title = "Nothing to see here!"
  return (
    <div className="page">
      <title>{`${title} | React 19 head element test`}</title>
      <h1>{title}</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
