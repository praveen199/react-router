import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
