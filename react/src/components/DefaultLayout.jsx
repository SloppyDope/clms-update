import { Navigate, Outlet,Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx"; 

export default function DefaultLayout() {
  const { user, token } = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
        <a href="#" className="btn-logout">Logout</a>
      </aside>

      <div className="content">
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
