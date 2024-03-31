import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" className="home-link">
        Go back home
      </a>
    </div>
  );
}
