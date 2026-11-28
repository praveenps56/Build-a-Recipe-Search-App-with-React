import { Link } from "react-router-dom";
export default function NotFound() {
  return <div className="empty-panel"><h1>Page not found</h1><Link to="/" className="primary-button">Go home</Link></div>;
}
