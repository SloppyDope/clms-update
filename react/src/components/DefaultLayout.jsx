import { Navigate, Outlet,Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx"; 

export default function DefaultLayout() {
  const { user, token } = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div id="defaultLayout">
      <aside className="sidebar">
        <div>
          <div className="logo">
            <img src="src/assets/logo.png" alt="Cornerstone" />
          </div>

          <div className="section-title">Main Navigation</div>
          <nav>
            <Link to="/dashboard" className="active">🏠 Dashboard</Link>
            <Link to="/employment">💼 Employment</Link>
            <Link to="/time-tracker">⏱️ Time Tracker</Link>
          </nav>

          <div className="section-title">Activity Analytics</div>
          <nav>
            <Link to="/reports">📊 My Reports</Link>
            <Link to="/requests">📄 Request</Link>
          </nav>

          <div className="section-title">Communications</div>
          <nav>
            <Link to="/announcements">🔔 Announcement</Link>
            <Link to="/faqs">❓ FAQ's</Link>
            <Link to="/settings">⚙️ Settings</Link>
          </nav>
        </div>

        <Link to="/logout" className="logout">🚪 Logout</Link>
      </aside>

      <div className="main-content">
        <header>
          <h1 className="page-title">Dashboard</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <i className="fa fa-search"></i>
          </div>
          <div className="user-area">
            <div className="badge">Employee</div>
            <div className="notif">
              <i className="fa fa-bell"></i>
            </div>
            <div className="profile">
              <img src="/src/assets/icon.png" alt="User" />
              <span>Alex Johnson</span>
            </div>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
