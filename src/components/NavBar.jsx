import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Go to home page</Link>
        </li>
        <li>
          <Link to="/Countries">Go to countries</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};